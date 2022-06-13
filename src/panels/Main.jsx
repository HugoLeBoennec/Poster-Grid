import React from "react";
import {View, Flex, SearchField, ActionButton} from '@adobe/react-spectrum';

export const Main = (props) => {
    return (
        <>
            <Flex direction="row">

                <SearchField
                    label="Search"
                    onSubmit={setSubmittedText} />
                <ActionButton aria-label="Icon only">
                    <Edit />
                </ActionButton>
                <Flex direction="row">
                    <View backgroundColor="celery-600" width="card" />
                    <View backgroundColor="celery-600" width="card" />
                    <View backgroundColor="celery-600" width="card" />
                    <View backgroundColor="celery-600" width="card" />
                    <View backgroundColor="celery-600" width="card" />
                </Flex>
                <Slider label="Column" defaultValue={8} />
                <Slider label="Row" defaultValue={4} />
            </Flex>
        </>)
} 
