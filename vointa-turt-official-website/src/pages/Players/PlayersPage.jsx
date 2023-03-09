import "./PlayersPage.scss";
import React, { useEffect, useState } from "react";
import Title from "../../reusable/Title/Title";
import { players } from "../../data/data";
import { PlayerCard } from "../../reusable/Card/PlayerCard";

const PlayersPage = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  useEffect(() => {
    setAllPlayers(players);
  }, []);
  return (
    <section className="players-page-container">
      <div className="players-page-title">
        <Title
          title="JUCĂTORI"
          color="#F1FE28"
          width="fit-content"
          fontSize="4rem"
        />
      </div>
      <div className="players-page-players">
        <section className="players-section">
          <div className="players-page-title-players">
            <Title title="Portari" width="fit-content" fontSize="5rem" />
          </div>
          {allPlayers?.map((item, index) => {
            return <PlayerCard key={index} player={item} />;
          })}
        </section>

        <section className="players-section">
          <div className="players-page-title-players">
            <Title title="Fundași" width="fit-content" fontSize="5rem" />
          </div>
          {allPlayers?.map((item, index) => {
            return <PlayerCard key={index} player={item} />;
          })}
        </section>

        <section className="players-section">
          <div className="players-page-title-players">
            <Title title="Mijlocași" width="fit-content" fontSize="5rem" />
          </div>
          {allPlayers?.map((item, index) => {
            return <PlayerCard key={index} player={item} />;
          })}
        </section>

        <section className="players-section">
          <div className="players-page-title-players">
            <Title title="Atacanți" width="fit-content" fontSize="5rem" />
          </div>
          {allPlayers?.map((item, index) => {
            return <PlayerCard key={index} player={item} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default PlayersPage;
