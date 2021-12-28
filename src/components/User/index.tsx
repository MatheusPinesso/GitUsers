import React from 'react';
import { Text, View, Image,StyleSheet, StatusBar } from 'react-native';
import { Container, ContainerBio, ContainerFoto, ContainerLoc, ContainerNome } from './styles';

export interface UserProps {
    login: string;
    avatar_url: string;
    bio: string;
    location: string;
    created_at: string;
    name: string;
}

const User: React.FC<UserProps> = ({ login, name, avatar_url, bio, location, created_at }) => {
    return (
        <>
        <Container>
           <ContainerNome >
               <Text style={styles.styleNome}>Nomes: {name}</Text>
           </ContainerNome>

            <ContainerBio >
            <Text style={styles.styleBio}>Bio: { bio }</Text>
            </ContainerBio>

            <ContainerLoc >
            <Text style={styles.styleLoc}>Localização: { location }</Text>
            </ContainerLoc>

            <ContainerFoto>
            <Image  source={{ uri: avatar_url }} style={styles.setBorderImage}></Image>
        </ContainerFoto>
        </Container>
        </>
    );
}; 

const styles = StyleSheet.create({
    setBorderImage: {
        padding:100,
        borderWidth: 2,
        borderRadius:100,
        borderColor:'#c40214',

    },
    styleNome: {
      fontSize:17,
    },
    styleBio: {
        fontSize:17,
        
    },
    styleLoc: {
        fontSize:17,
    },
})




export default User;