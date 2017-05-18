import React from 'react';
import {} from 'react-native';
import { Footer,  FooterTab,Button, Icon , Text } from 'native-base';

export default class FooterSection extends React.Component {
    constructor(props) {
        super(props);

        this.defaultTabs = {
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
        };

        this.state = {
            ...this.defaultTabs,
            tab1: true
        };

        //this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tabName) {
        this.setState({
            ...this.defaultTabs,
            [tabName]: true
        });
        this.props.updateScreen(tabName);
    }


  render() {
    return (
     <Footer >
            <FooterTab>
                <Button vertical  
                        active={this.state.tab1} 
                        onPress={this.toggleTab.bind(this, 'tab1')}>
                    <Icon name="calendar" />
                    <Text>Programa</Text>
                </Button>
                <Button  vertical  
                        active={this.state.tab2} 
                        onPress={this.toggleTab.bind(this, 'tab2')}>
                    <Icon name="mic" />
                    <Text>Ponentes</Text>
                </Button>
                <Button  vertical  
                        active={this.state.tab3} 
                        onPress={this.toggleTab.bind(this, 'tab3')}>
                    <Icon name="person" />
                    <Text>Rooms</Text>
                </Button>
                <Button  vertical  
                        active={this.state.tab4} 
                        onPress={this.toggleTab.bind(this, 'tab4')}>
                    <Icon active name="settings" />
                    <Text>Info</Text>
                </Button>
                
            </FooterTab>
        </Footer>
    );
  }
}

