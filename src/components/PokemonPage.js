import {Button, Typography } from 'antd';
import React from 'react';

function PokemonPage(props){
    return(
        <div>
            <div className="row no-gutters">
                <div className="col-sm-8">
                    <div className="text-container">
                        <Typography.Title level={3} className="text">information</Typography.Title>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>artist: {props.currentView.artist}</Typography.Paragraph>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>hp: {props.currentView.hp}</Typography.Paragraph>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>name: {props.currentView.name}</Typography.Paragraph>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>number: {props.currentView.number}</Typography.Paragraph>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>rarity: {props.currentView.rarity}</Typography.Paragraph>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>series: {props.currentView.series}</Typography.Paragraph>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>set: {props.currentView.set}</Typography.Paragraph>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>subtype: {props.currentView.subtype}</Typography.Paragraph>
                        <Typography.Paragraph className="text"><Typography.Title></Typography.Title>types: {props.currentView.types}</Typography.Paragraph>
                        <Button type={"primary"} onClick={() => props.handleCurrentView(null)}>Back</Button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <img className="product" alt={props.currentView.name} src={props.currentView.imageUrlHiRes}/>
                </div>
            </div>
        </div>
    )
}

export default PokemonPage;