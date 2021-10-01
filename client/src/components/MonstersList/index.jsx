import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const MonstersList = (props) => {
  const { monsters, fetchMonsters } = props;

  useEffect(() => {
    fetchMonsters();
  }, []);

  console.log(monsters);

  return (
    <div>
      {monsters?.map((monster) => (
        <ListItem
          data={monster}
          fields={[
            ["Type", "type"],
            ["Terrain", "terrain"],
            ["Armor Class", "armorClass"],
            ["Hit Points", "hitPoints"],
            ["Speed", "speed"],
            ["Saving Throws", "savingThrows"],
            ["Skills", "skills"],
            ["Damage Vulnerabilities", "damageVulnerabilities"],
            ["Damage Resistances", "damageResistances"],
            ["Damage Immunities", "damageImmunities"],
            ["Condition Immunities", "conditionImmunities"],
            ["Senses", "senses"],
            ["Languages", "languages"],
            ["CR", "challengeRating"],
            ["Traits", "traits"],
            ["Actions", "actions"],
            ["Reactions", "reactions"],
            ["Lair Actions", "Lair Actions"],
            ["Legendary Actions", "legendaryActions"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ monsters }) => {
  return { monsters };
};

export default connect(mapStateToProps, actions)(MonstersList);
