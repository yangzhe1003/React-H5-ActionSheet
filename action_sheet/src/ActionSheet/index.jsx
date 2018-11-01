import React, { Component } from "react";

import styled, { css } from "styled-components";
import "./animated.css"

class ActionSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _visite: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            _visite: nextProps.visite
        });
    }

    close() {
        this.setState(
            {
                _visite: false
            },
            () => {
                setTimeout(() => {
                    this.props.onClose();
                }, 300);
            }
        );
    }

    render() {
        const { _visite } = this.state;
        return (
            <View
                {...this.props}
                className={_visite ? "animated-fade-in" : "animated-fade-out"}
                onClick={this.close.bind(this)}
            >
                <Container
                    className={
                        _visite
                            ? "animated-slide-in-up"
                            : "animated-slide-out-down"
                    }
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <Title>
                        {this.props.title ? this.props.title : "标题"}
                    </Title>
                    {this.props.children}
                </Container>
            </View>
        );
    }
}

export default ActionSheet;

const View = styled.div`
    width: 100%;
    height: 100%;
    background-color: RGBA(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    display: none;
    ${props =>
        props.visite &&
        css`
            display: flex;
            align-items: flex-end;
            justify-content: center;
        `} 
    
`;

const Container = styled.div`
    width: 100%;
    min-height: 5rem;
    background-color: #ffffff;
`;

const Title = styled.div`
    width: 100%;
    height: 2.1rem;
    font-size: 1rem;
    font-weight: 500;
    color: #555555;
    text-align: center;
    line-height: 2.1rem;
    border-bottom: 0.05rem solid #f2f2f2;
    position: relative;
`;
