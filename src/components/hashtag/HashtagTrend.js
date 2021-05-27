import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HashtagTrend() {
  const [trend, setTrend] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/trending",
      config
    );

    promise.then((answer) => {
      setTrend(answer.data.hashtags);
    });
  }, [user]);

  return (
    <TrendBox>
      <Title>trending</Title>
      <Trends>
        {trend.map((item) => (
          <Link to={`/hashtags/${item.name}`}>
            <h1>#{item.name}</h1>
          </Link>
        ))}
      </Trends>
    </TrendBox>
  );
}

const TrendBox = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 16px;
  background: #171717;
  color: #fff;

  font-weight: 700;
  position: fixed;
  left: calc(50vw + 150px);
  top: 211px;

  @media (max-width: 600px) {
    display: none;
  }
`;



const Title = styled.div`
  width: 100%;
  font-family: "Oswald", sans-serif;
  text-align: left;
  font-size: 27px;
  line-height: 61px;
  padding-left: 16px;
  border-bottom: 1px solid #484848;
`;

const Trends = styled.div`
  font-family: "Lato";
  max-width: 100%;
  height: 293px;
  overflow: hidden;
  padding-left: 16px;
  margin-top: 22px;
  
  h1 {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.05em;
   
  }
`;
