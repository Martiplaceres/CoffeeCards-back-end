import React, { useEffect, useState } from "react";
import axios from "axios";
import { selectToken, selectUser } from "../store/user/selectors";
import { useSelector } from "react-redux";
import "../App.css";
import QRCode from "react-qr-code";
import { Modal, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function MyVouchers() {
  const [myVouchers, setMyVouchers] = useState([]);
  const token = useSelector(selectToken);
  const userId = localStorage.getItem("id");
  const user = useSelector(selectUser);

  const [qrCodeValue, setQrCodeValue] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/vouchers/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("My vouchers:", response.data);
        setMyVouchers(response.data);
      } catch (e) {
        console.log("error:", e);
      }
    })();
  }, []);

  return (
    <div>
      <body className="backgroundPages"> </body>
      <div
        className="animation"
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="vouchersCardTitle">
          {user.name}, is time for <span className="boldTitle">free</span>{" "}
          coffee!
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!Array.isArray(myVouchers)
            ? `You have no vouchers yet.`
            : myVouchers.map((voucher) => {
                return (
                  <div key={voucher.id} style={{ marginTop: 20 }}>
                    <Card className="card" style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>{voucher.store.name}</Card.Title>
                        <div style={{ display: "flex", justifyContent: "row" }}>
                          <div>
                            <Button
                              variant="dark"
                              onClick={() => {
                                const baseUrl = window.location.origin;
                                const url = `${baseUrl}/scanvoucher?id=${voucher.id}&storeId=${voucher.storeId}`;
                                console.log(url);
                                setQrCodeValue(url);
                              }}
                            >
                              Tap to use
                            </Button>

                            <Modal
                              show={qrCodeValue != null}
                              onHide={() => setQrCodeValue(null)}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  Show QR code to use voucher
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                {qrCodeValue && <QRCode value={qrCodeValue} />}
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={() => setQrCodeValue(null)}
                                >
                                  Close
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
