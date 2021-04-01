import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 60px;
    flex: 1;

`;

export const Logo = styled.Text`
    color: #060719;
    font-size: 25px;
    font-weight: bold;
    text-align: left;
    
`;

export const FormContainer = styled.View`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
`;

export const Input = styled.TextInput`
    width: 90%;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 120px;
`;

export const FloatButton = styled.TouchableOpacity`
    background-color: #c40214;
    padding: 20px;
    border-radius: 50px;
    position: absolute;
    right: 0;
`;