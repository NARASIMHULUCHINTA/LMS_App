import { StyleSheet } from 'react-native';
import { Colors, Typography, minxmins } from '../styles';

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,  
        paddingTop:30,
        padding:20,      
    },
    row:{
        flexDirection:'row'
    },
    scrollContainer: {
        flexGrow: 1,
      },
    coursename:{
        fontSize:Typography.FONT_SIZE_20,
        fontFamily:Typography.FONT_FAMILY_MEDIUM,
        color:Colors.BLUESHADE,
    },
    instructor:{
        color:Colors.GRAY_DARK,
        fontFamily:Typography.FONT_FAMILY_REGULAR,
    },
    courseimage:{
        width:'100%',
        height:undefined,
        aspectRatio:1.5,
        marginTop:10,
        borderRadius:10
    },
    aboutcourse:{
        marginTop:10,
        fontSize:Typography.FONT_SIZE_16,
        color:Colors.BLUESHADE,
        fontFamily:Typography.FONT_FAMILY_MEDIUM,
    },
    description:{
        color:Colors.GRAY_DARK,
        fontFamily:Typography.FONT_FAMILY_REGULAR,
    },
    syllabusHeader: {
        marginTop: 20,
        fontSize: Typography.FONT_SIZE_18,
        color: Colors.BLUESHADE,
        fontFamily: Typography.FONT_FAMILY_MEDIUM,
      },

    syllabusBox: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 10,
        shadowColor: Colors.GRAY_DARK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2, // For Android shadow
        marginTop: 10,
      },
    
      syllabusWeek: {
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.SECONDARY,
        fontFamily: Typography.FONT_FAMILY_MEDIUM,
      },
    
      syllabusTopic: {
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_MEDIUM,
      },
    
      syllabusContent: {
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.GRAY_DARK,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
      },
    
      syllabusButton: {
        backgroundColor: Colors.PRIMARY,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
    
      syllabusButtonText: {
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.WHITE,
        fontFamily: Typography.FONT_FAMILY_MEDIUM,
      },
      downarrow:{
        marginTop:20,
        color:Colors.BLUESHADE,
        marginLeft:10,
      }

    
});

export default styles;