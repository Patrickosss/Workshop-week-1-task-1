import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

const ContactScreen = () => {
    return (
<ScrollView>
    <Card wrapperStyle={{margin: 20}}> 
        <Card.Title>Contact Us</Card.Title>
        <Card.Divider />
        <Text style={{margin: 10 }}>
                            1 Nucamp Way
                            Seattle, WA 98001
                            U.S.A.

                            Phone: 1-206-555-1234
                            Email: campsites@nucamp.co
                            </Text>
    </Card>
</ScrollView>
    )
}


export default ContactScreen;