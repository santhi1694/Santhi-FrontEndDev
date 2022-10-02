import { Card, List, Modal } from "antd";
import React, { useState } from "react";
import CapsuleContent from "../capsuleContent/CapsuleContent";

const DataGrid = ({ capsules = [], currentPage, updatePage }) => {
  //   const contextData = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState({});
  const onItemClick = (data) => {
    setShowModal(true);
    setCardData(data);
  };
  const onCloseModal = () => {
    setShowModal(false);
    setCardData("");
  };
  const onPagechange = (page) => {
    updatePage(page);
  };

  // commenting PHP API due to issues
  //   useEffect(() => {
  //     fetch("http://localhost:8000/index.php", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${contextData.userToken}`,
  //       },
  //       redirect: "follow", // manual, *follow, error
  //     })

  //   });
  return (
    <>
      <Modal
        title={`${cardData.capsule_serial}`}
        centered
        open={showModal}
        onCancel={onCloseModal}
        footer={null}
        width={"50%"}
      >
        <CapsuleContent capsuleData={cardData} />
      </Modal>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={capsules}
        pagination={{
          current: currentPage,
          onChange: onPagechange,
          pageSize: 8,
          total: 20,
        }}
        renderItem={(item) => (
          <List.Item key={item.capsule_id + item.capsule_serial}>
            <Card title={item.capsule_serial} onClick={() => onItemClick(item)}>
              <div className="card-content">{item.details || "---------"}</div>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};
export default DataGrid;
