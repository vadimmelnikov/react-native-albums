import React from 'react';
import {Text, View} from 'react-native';
import Card from './Card'
import CardSection from "./CardSection";

const albumDetail = (props) => {
    return (
        <React.Fragment>
            <Card>
                <CardSection>
                    <View>
                        <Text>{props.album.title}</Text>
                        <Text>{props.album.artist}</Text>
                    </View>
                </CardSection>
            </Card>
        </React.Fragment>
    );
};

const style = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
};

export default albumDetail;