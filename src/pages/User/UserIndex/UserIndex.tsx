import React from "react";

import { useHistory } from "react-router-dom";

// styles
import { Container, WrapperBox, Box, Input, WrapperUsers, User, Avatar, Info, Title, Description } from "./style";

// assets
import SearchIcon from "../../../assets/search.svg";

interface Props {}

const UserIndex: React.FC<Props> = (props) => {
    const history = useHistory();

    return (
        <Container>
            <WrapperBox>
                <Box>
                    <img src={SearchIcon} alt="search-icon" />
                    <Input placeholder="type name user from github..." />
                </Box>
            </WrapperBox>

            <WrapperUsers>
                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>

                <User>
                    <Avatar></Avatar>

                    <Info>
                        <Title>
                            <h1 onClick={() => history.push("/users/1")}> Matheus Paice </h1>
                            <span> #Paice </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </User>
            </WrapperUsers>
        </Container>
    );
};

export default UserIndex;
