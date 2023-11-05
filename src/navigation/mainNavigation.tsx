

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseList from '../screens/CourseList';
import StudentDashboard from '../screens/StudentDashboard';
import CourseDetails from '../screens/CourseDetails';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='CourseList' component={CourseList} />
            <Stack.Screen name='StudentDashboard' component={StudentDashboard} />
            <Stack.Screen name='CourseDetails' component={CourseDetails} />
        </Stack.Navigator>
    );
}
export default MainNavigation;