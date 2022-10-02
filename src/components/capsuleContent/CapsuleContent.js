import React from "react";
import { titleCase } from "../../utils/utils";

const DataLabels = ({ renderKeys, data }) => {
  return (
    <div className="capsule-data-labels">
      {renderKeys.map(([label, value]) => {
        return (
          <div key={label}>
            <span className="label"> {titleCase(label)} : </span>
            <span>{value || data[label]}</span>
          </div>
        );
      })}
    </div>
  );
};
export const CapsuleModalTitle = ({ capsuleData }) => {
  const renderKeys = [
    ["capsule_serial"],
    ["original_launch", new Date(capsuleData.original_launch).toLocaleString()],
  ];
  return <DataLabels renderKeys={renderKeys} data={capsuleData} />;
};
const CapsuleContent = ({ capsuleData }) => {
  const renderKeys = [
    ["capsule_id"],
    ["original_launch", new Date(capsuleData.original_launch).toLocaleString()],
    ["status"],
    ["type"],
    ["landings"],
    ["reuse_count"],
  ];
  return (
    <div className="">
      <div>{capsuleData.details}</div>
      <br />
      <DataLabels renderKeys={renderKeys} data={capsuleData} />
      <br />
      <div>
        <div className="label">Missions:</div>
        {capsuleData.missions.map((mission) => (
          <DataLabels renderKeys={[["name"], ["flight"]]} data={mission} />
        ))}
      </div>
    </div>
  );
};
export default CapsuleContent;
