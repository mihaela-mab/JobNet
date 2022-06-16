import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Carousel from 'react-native-snap-carousel';

const _renderItem = ({item, index}) => {
    return (
        <View >
            <Text >{ item.title }</Text>
        </View>
    );
}

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/logo.png')} style={styles.imageContainer}/>
                <Text>JobNet</Text>
            </View>
            <View>
                <Text>Newly added</Text>
                <Carousel
                    data={[{id: 1, title: 'Some random title'}, {id: 2, title: 'Some random title 2'}]}
                    renderItem={_renderItem}
                    sliderWidth={100}
                    itemWidth={50}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    imageContainer: {
        width: 150,
        height: 80
    }
});
