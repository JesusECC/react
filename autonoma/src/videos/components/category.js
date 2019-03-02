import React from 'react';

function Category(props){
    return(
        <view>
            <Text>
                {props.genres[0]}
            </Text>
        </view>
    )
}