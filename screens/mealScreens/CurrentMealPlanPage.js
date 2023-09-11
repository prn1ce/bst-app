import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import { styles } from '../styles';
import CustomHeader from '../../components/CustomHeader';
import SingleTile from '../../components/SingleTile';
import Divider from '../../components/Divider';

export default function CurrentMealPlanPage({ navigation }) {

    {/* Set the Default Width of the Application */}
    const defaultWidth = Dimensions.get('window').width - 40;
    const thumbnailTileHeight = Dimensions.get('window').width / 2;

    return (
        <SafeAreaView style={styles.container}>

            {/* Add the Header */}
            <CustomHeader title={'Your Current Meal Plan'} showLogo={false}/>

            <ScrollView>
                <View style={[styles.bodyContent, {gap: 20}]}>

                    {/* Add the Header */}
                    <View>
                        <Text style={styles.header}>Today's Breakfast</Text>
                    </View>

                    {/* Add the Content */}
                    <SingleTile 
                    label={'Belgian Pancakes'}
                    imagePath={require('../../assets/mealScreensImages/currentMealPlan/pancakes.jpg')}
                    tileWidth={defaultWidth}
                    tileHeight={thumbnailTileHeight}
                    textSize={18}
                    subHeaderActive={true}
                    subHeaderText={'Start your day off with some delicious, nutritious pancakes.'}
                    viewButton={true}
                    />

                    <Divider />

                    {/* Add the Header */}
                    <View>
                        <Text style={styles.header}>Today's Lunch</Text>
                    </View>

                    {/* Add the Content */}
                    <SingleTile 
                    label={'Singaporean Noodles'}
                    imagePath={require('../../assets/mealScreensImages/currentMealPlan/noodles.jpg')}
                    tileWidth={defaultWidth}
                    tileHeight={thumbnailTileHeight}
                    textSize={18}
                    subHeaderActive={true}
                    subHeaderText={'The perfect, midday treat for you!'}
                    viewButton={true}
                    navigation={navigation}
                    navigateTo={'MealInformationPage'}
                    />

                    <Divider />

                    {/* Add the Header */}
                    <View>
                        <Text style={styles.header}>Today's Dinner</Text>
                    </View>

                    {/* Add the Content */}
                    <SingleTile 
                    label={'Green Salad'}
                    imagePath={require('../../assets/mealScreensImages/currentMealPlan/greensalad.jpg')}
                    tileWidth={defaultWidth}
                    tileHeight={thumbnailTileHeight}
                    textSize={18}
                    subHeaderActive={true}
                    subHeaderText={'End your day with a healthy meal.'}
                    viewButton={true}
                    />

                    <Divider />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}