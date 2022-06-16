import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { AccountSettings } from "../components/AccountSettings";
import { themeVariables } from "../shared/styles/themeVariables";
import { ListItem } from "react-native-elements";
import { CV } from "../components/CV";
import { Environment } from "../shared/environment";
import { Candidate } from "../models/Candidate";


export const ProfileScreen = () => {
    const [accountDataExpanded, setAccountDataExpanded] = useState<boolean>(false);
    const [cvExpanded, setCvExpanded] = useState<boolean>(false);
    const [candidate, setCandidate] = useState<Candidate>();

    const getCandidate = useCallback(async () => {
        const response = await fetch(`${Environment.baseUrl}/candidates/1`);

        if (response.ok) {
            const candidate = await response.json();
            setCandidate(candidate);
        }
    }, []);

    useEffect(() => {
        getCandidate();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <ListItem.Accordion
                    content={
                        <>
                            <ListItem.Content>
                                <ListItem.Title>Account Data</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={accountDataExpanded}
                    onPress={() => setAccountDataExpanded(!accountDataExpanded)}
                >
                    <AccountSettings accountData={candidate} />
                </ListItem.Accordion>

                <ListItem.Accordion
                    content={
                        <>
                            <ListItem.Content>
                                <ListItem.Title>Edit CV</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={cvExpanded}
                    onPress={() => setCvExpanded(!cvExpanded)}
                >
                    <CV cvData={candidate?.cv} />
                </ListItem.Accordion>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: themeVariables.bgColor,
        flex: 1
    }
})