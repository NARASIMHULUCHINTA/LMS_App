import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import courseModel, { COURSE_DATA } from '../constants/courseModel';
import styles from './CourseListStyle';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CourseList() {
  const [courseData, setCourseData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    courseModel.fetchCourseData().then((data) => {
      setCourseData(data);
    });
  }, []);


  
  const courses = ({item}) => {
    return  (
      <View style={styles.container}>
        <TouchableOpacity style={styles.coursecontainer} onPress={() => navigation.navigate('CourseDetails', { paramKey: item })}>
          <Image source={item.thumbnail} resizeMode='contain' style={styles.courseimage}/>
          <Text style={styles.coursename}>{item.name}</Text>
          <Text style={styles.instructor}>{COURSE_DATA.BY}{item.instructor}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      </View>
      
  )
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
      <Ionicons name="person-circle-outline" size={44} style={styles.dashboardicon} onPress={() => navigation.navigate('StudentDashboard')}/>
      <Text style={styles.heading}>{COURSE_DATA.COURSE_LIST}</Text>
      </View>
     
      <FlatList
        data={courseData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={courses}
      />
    </View>
  );
}
