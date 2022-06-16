import React, {useCallback, useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { sharedStyles } from "../shared/styles/styles";
import { Environment}  from "../shared/environment";
import { themeVariables } from "../shared/styles/themeVariables";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

export const AccountSettings = ({ accountData }) => {
    const [firstName, setFirstName] = useState<string>(
        () => accountData?.firstName || ''
    );
    const [lastName, setLastName] = useState<string>(
        () => accountData?.lastName || ''
    );
    const [email, setEmail] = useState<string>(
        () => accountData?.email || ''
    );
    const [successMessage, setSuccessMessage] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const editAccountData = useCallback(async () => {
        const response = await fetch(
            `${Environment.baseUrl}/candidates`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...accountData,
                    firstName,
                    lastName,
                    email
                })
            }
        );

        if (response.ok) {
            setSuccessMessage(true);
            setErrorMessage(false);
        } else {
            setErrorMessage(true);
            setSuccessMessage(false);
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={successMessage ? styles.messageContainer : { display: "none" }}>
                <AntDesignIcon name={'smile-circle'} size={20} color={themeVariables.green} style={styles.icon}/>
                <Text style={styles.success}>
                    Your changes have been saved successfully!
                </Text>
            </View>
            <View style={errorMessage ? styles.messageContainer : { display: "none" }}>
                <AntDesignIcon name={'frown'} size={20} color={themeVariables.red} style={styles.icon}/>
                <Text style={styles.error}>
                    There was an error while trying to update your data
                </Text>
            </View>

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
                    autoCompleteType='name'
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>

            <Button
                title={'Apply changes'}
                buttonStyle={[sharedStyles.button, sharedStyles.primaryButton]}
                onPress={editAccountData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    success: {
        color: themeVariables.green,
    },
    error: {
        color: themeVariables.red,
    },
    messageContainer: {
        marginBottom: 20,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 5
    }
})