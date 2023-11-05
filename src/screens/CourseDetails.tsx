import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './CourseDetailsStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../styles';
import Collapsible from 'react-native-collapsible';
import { useRoute, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../components/Buttons';
import { ToastView } from '../utils/ToastView';
import { COURSE_DATA, failureToastData, infoToastData, successToastData } from '../constants/courseModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CourseDetails = () => {
  const [isEnrolled, setEnrolled] = useState(false);
  const [isSyllabusCollapsed, setSyllabusCollapsed] = useState(true); 
  const route = useRoute();
  const navigation = useNavigation();
  const course = route?.params?.paramKey;

  const enrollInCourse = async () => {
    if (course.enrollmentStatus === COURSE_DATA.OPEN) {
      const storedEnrolledCourses = await AsyncStorage.getItem(COURSE_DATA.ENROLLED_COURSES);
      if (storedEnrolledCourses) {
        const enrolledCourses = JSON.parse(storedEnrolledCourses);
        const isAlreadyEnrolled = enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id);
        if (!isAlreadyEnrolled) {
          enrolledCourses.push(course);
          await AsyncStorage.setItem(COURSE_DATA.ENROLLED_COURSES, JSON.stringify(enrolledCourses));
          setEnrolled(true);
          ToastView(successToastData);
        } else {
          ToastView(infoToastData);
        }
      } else {
        const newEnrolledCourses = [course];
        await AsyncStorage.setItem(COURSE_DATA.ENROLLED_COURSES, JSON.stringify(newEnrolledCourses));
        setEnrolled(true);
        ToastView(successToastData);
      }
    } else {
      ToastView(failureToastData);
    }
  };
  

  const courseInfoData = [
    { label: COURSE_DATA.ENROLL_STATUS, value: course.enrollmentStatus },
    { label: COURSE_DATA.COURSE_DURATION, value: course.duration },
    { label: COURSE_DATA.SCHEDULE, value: course.schedule },
    { label: COURSE_DATA.LOCATION, value: course.location },
    { label: COURSE_DATA.PRE_REQUISITES, value: course.prerequisites.join(', ') },
  ];


  return (
    <View style={styles.maincontainer}>
      <Ionicons name="arrow-back-sharp" size={24} color={Colors.BLACK} onPress={() => navigation.goBack()}/>
      <ScrollView contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
        <Text style={styles.coursename}>{course.name}</Text>
        <Text style={styles.instructor}>{COURSE_DATA.BY} {course.instructor}</Text>
        <Image source={course.thumbnail} style={styles.courseimage} />
        <Text style={styles.aboutcourse}>{COURSE_DATA.ABOUT_COURSE}</Text>
        <Text numberOfLines={4} style={styles.description}>
          {course.description}
        </Text>
        {courseInfoData.map((info, index) => (
          <View key={index}>
            <Text style={styles.aboutcourse}>{info.label}</Text>
            <Text style={styles.instructor}>{info.value}</Text>
          </View>
        ))}
        
        <TouchableOpacity style={styles.row} >
          <Text style={styles.syllabusHeader} >{COURSE_DATA.SYLLABUS}</Text>
          <Ionicons name="caret-down-circle" size={24} style={styles.downarrow} onPress={() => setSyllabusCollapsed(!isSyllabusCollapsed)}/>
        </TouchableOpacity>
        <Collapsible collapsed={isSyllabusCollapsed}>
          {course.syllabus.map((item) => (
            <View key={item.week} style={styles.syllabusBox}>
              <Text style={styles.syllabusWeek}>{COURSE_DATA.WEEK} {item.week}</Text>
              <Text style={styles.syllabusTopic}>{item.topic}</Text>
              <Text style={styles.syllabusContent}>{item.content}</Text>
            </View>
          ))}
        </Collapsible>
        <PrimaryButton
        title={isEnrolled ? COURSE_DATA.ENROLLED : course.enrollmentStatus}
        onPress={enrollInCourse}
        disabled={isEnrolled || course.enrollmentStatus !== COURSE_DATA.OPEN}
      />
      </ScrollView>
    </View>
  );
};

export default CourseDetails;
