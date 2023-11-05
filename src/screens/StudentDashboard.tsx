import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import styles from './StudentDashBoardStyle';
import CustomProgressBar from '../components/ProgressBar';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COURSE_DATA } from '../constants/courseModel';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const retrieveEnrolledCourses = async () => {
      const storedEnrolledCourses = await AsyncStorage.getItem('enrolledCourses');

      if (storedEnrolledCourses) {
        const parsedCourses = JSON.parse(storedEnrolledCourses);
        setEnrolledCourses(parsedCourses);
      }
    };

    retrieveEnrolledCourses();
  }, []);

  
  const courses = ({item}) => {
    const progressval = item.progress/100;
    console.log(progressval);
    return  (
      <TouchableOpacity
      style={styles.coursecontainer}
      onPress={() => navigation.navigate('CourseDetails', { paramKey: item })}
    >
      <Image source={item.thumbnail} style={styles.image} />
      <View style={styles.maincontainer}>
        <Text style={styles.coursename}>{item.name}</Text>
        <Text style={styles.text}>{COURSE_DATA.BY} {item.instructor}</Text>
        <Text style={styles.text}>{COURSE_DATA.DATE} {item.dueDate}</Text>
        <CustomProgressBar progress={item.progress} />
      </View>
    </TouchableOpacity>
      
  )
  }

  
  

  return (
    <View style={styles.maincontainer}>
      <View style={styles.row}>
        <Ionicons name="arrow-back-sharp" size={24} style={styles.arrowicon} onPress={() => navigation.goBack()}/>
        <Text style={styles.mainheading}>{COURSE_DATA.EN_COURSE}</Text>
      </View>
      

      {enrolledCourses.length === 0 ? (
        <Text style={styles.nocoursestext}>{COURSE_DATA.NO_COURSE}</Text>
      ) : (
        <FlatList
          data={enrolledCourses}
          keyExtractor={(item, index) => `${item.id}-${index}`} 
          renderItem={courses}
        />
      )}
    </View>
  );
};

export default StudentDashboard;
