import React, {useCallback, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { Cv } from "../models/Cv";
import {Environment} from "../shared/environment";

export const CV = ({ cvData }: { cvData: Cv | any }) => {
    const [firstName, setFirstName] = useState<string>(
        () => cvData?.firstName || ''
    );
    const [lastName, setLastName] = useState<string>(
        () => cvData?.lastName || ''
    );
    const [email, setEmail] = useState<string>(
        () => cvData?.email || ''
    );
    const [phoneNumber, setPhoneNumber] = useState<string>(
        () => cvData?.phoneNumber || ''
    );
    const [skills, setSkills] = useState<string>(
        () => cvData?.skills || ''
    );

    const editCv = useCallback(async () => {
        const response = await fetch(
            `${Environment.baseUrl}/cv/${cvData.id}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...cvData,
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    skills
                })
            }
        );
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text>First name</Text>
                <Input
                    autoCompleteType='name'
                    value={firstName}
                    onChangeText={(value) => setFirstName(value)}
                />
            </View>
            <View>
                <Text>Last name</Text>
                <Input
                    autoCompleteType='name'
                    value={lastName}
                    onChangeText={(value) => setLastName(value)}
                />
            </View>
            <View>
                <Text>Email</Text>
                <Input
                    autoCompleteType='email'
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>
            <View>
                <Text>Phone number</Text>
                <Input
                    autoCompleteType='off'
                    value={phoneNumber}
                    onChangeText={(value) => setPhoneNumber(value)}
                />
            </View>
            <View>
                <Text>Skills</Text>
                <Input autoCompleteType='off' value={'Lorem ipsum'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})