import { StyleSheet } from 'react-native';
import { Colors, Typography, minxmins } from '../styles';

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,        
    },
    header:{
        marginVertical:10, 
        flexDirection:'row', 
        
        alignItems:'center',        
    },
    dashboardicon:{
        color:Colors.BLACK,
        paddingLeft:10,
    },
    heading:{
        marginLeft:100,
        marginTop:8,
        color:Colors.BLACK,
        fontSize:Typography.FONT_SIZE_24,        
        fontFamily:Typography.FONT_FAMILY_MEDIUM
    },
    courseimage:{
        width:'100%',
        height:undefined,
        aspectRatio:1,
    },
    container:{
        paddingHorizontal:20,
    },
    coursecontainer:{
        padding:30,
        backgroundColor:Colors.WHITE,
        textAlign:'center',
        borderRadius:5,
        shadowColor:Colors.GRAY_DARK,
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.5,
        shadowRadius:8,
        elevation:8,
        marginVertical:30,
    },
    coursename:{
        fontSize:Typography.FONT_SIZE_22,
        color:Colors.BLUESHADE,
        textAlign:'center',
        textTransform:"uppercase",
        paddingBottom:15,
        fontFamily:Typography.FONT_FAMILY_REGULAR,
    },
    instructor:{
        fontSize:Typography.FONT_SIZE_18,
        color:Colors.LIGHTBLUE,
        textAlign:'left',
        paddingBottom:15,
        fontFamily:Typography.FONT_FAMILY_REGULAR,
    },
    description:{
        textAlign:'left',
        fontFamily:Typography.FONT_FAMILY_REGULAR,
        fontSize:Typography.FONT_SIZE_16,
        color:Colors.BLACK,
        lineHeight:Typography.LINE_HEIGHT_20,
        paddingTop:10,
    }
});

export default styles;