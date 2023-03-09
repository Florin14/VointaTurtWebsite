import "./CurrentSeasonPage.scss";
import React, { useState } from "react";
import { matches, results, seasonPageCategory, teams } from "../../data/data";
import { styled, Tabs, Tab, css } from "@mui/material";
import Title from "../../reusable/Title/Title";
import { SeasonCard } from "../../reusable/Card/SeasonCard";

const Ranking = () => {
  return (
    <div className="current-season-ranking-container">
      <span className="current-season-league">Liga 4 Elite - SERIA A</span>
      <table className="current-season-ranking">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>MJ</th>
            <th>V </th>
            <th>E</th>
            <th>Î</th>
            <th>G</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {teams
            .sort((team1, team2) => (team1.goals < team2.goals ? -1 : 1))
            .sort((team1, team2) => (team1.points < team2.points ? 1 : -1))
            .map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`${item.name === "Voința Turț" ? "my-team-ranking" : ""}`}
                >
                  <td className="position-ranking-column">{index + 1}.</td>
                  <td className="team-ranking-column">
                    <img src={item.logo} className="team-ranking-logo" />
                    {item.name}
                  </td>
                  <td>{item.matchesPlayed}</td>
                  <td>{item.wins}</td>
                  <td>{item.draws}</td>
                  <td>{item.loses}</td>
                  <td>
                    {item.goalsScored} : {item.goalsConceded}
                  </td>
                  <td className="points-ranking-column">{item.points}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="current-season-ranking-details">
        <span>* Loc(1-4): Play Off</span>
        <span>* Loc(5-8): Play Out</span>
      </div>
    </div>
  );
};

const CurrentSeasonPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    seasonPageCategory.CLASAMENT
  );
  console.log(selectedCategory);

  const handleCategorySelection = (_event, newSelectedCategory) => {
    setSelectedCategory(newSelectedCategory);
  };

  const renderMatches = (entities, categoryIndex) => {
    if (entities?.length && categoryIndex === selectedCategory) {
      return (
        <Cards key={categoryIndex} role="tabpanel">
          {entities.map((match) => (
            <SeasonCard
              key={match}
              id={match.id}
              title={match.title}
              description={match.description}
              price={match.price}
            />
          ))}
        </Cards>
      );
    }

    // if (categoryIndex === selectedCategory) {
    //   return (
    //     <EmptyAnnouncementsText key={categoryIndex} variant="body1">
    //       No announcements here yet
    //     </EmptyAnnouncementsText>
    //   )
    // }

    return null;
  };

  return (
    <div className="current-season-page-container">
      <div className="current-season-page-title">
        <Title
          title="sezon 2022-2023"
          color="#F1FE28"
          width="fit-content"
          fontSize="4rem"
        />
      </div>
      <Tabs
        value={selectedCategory}
        onChange={handleCategorySelection}
        indicatorColor="secondary"
        sx={{ backgroundColor: "#000", borderRadius: "10px", color: "#f1fe28" }}
      >
        <StyledTab
          label="Clasament"
          aria-selected={seasonPageCategory.CLASAMENT === selectedCategory}
        />

        <StyledTab
          label="Rezultate"
          aria-selected={seasonPageCategory.REZULTATE === selectedCategory}
        />
        <StyledTab
          label="Meciuri"
          aria-selected={seasonPageCategory.MECIURI === selectedCategory}
        />
      </Tabs>
      {[[], results, matches].map(renderMatches)}
      {selectedCategory === seasonPageCategory.CLASAMENT && <Ranking />}
    </div>
  );
};

const StyledTab = styled(Tab)`
  font-weight: 600;
  color: #fff;
  ${(props) =>
    props["aria-selected"] &&
    css`
      color: #f1fe28 !important;
    `}
  .indicator {
    background-color: #fff !important;
  }
`;

const Cards = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin-bottom: 20px;
`;

export default CurrentSeasonPage;
