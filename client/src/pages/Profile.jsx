import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getMyProd } from "../JS/actions/productAction";
import ListProd from "../components/ListProd";
const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  const myProduct = useSelector((state) => state.productReducer.myProduct);
  // console.log(myProduct);
  // console.log(user);
  const [newprod, setNewprod] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setNewprod({ ...newprod, [e.target.name]: e.target.value });
  };
  const handleAddProd = (e) => {
    e.preventDefault();
    dispatch(addProduct(newprod));
    handleClose();
    setNewprod({
      title: "",
      description: "",
      price: "",
      image: "",
    });
  };
  // console.log(newprod)
  useEffect(() => {
    dispatch(getMyProd());
  }, [dispatch]);
  return (
    <div
      className="page"
      style={{
        display: "flex",
        justifyContent: "ceter",
        flexDirection: "column",
      }}
    >
      {/* name of user (authReducer) */}
      <h3>{user.name && `Hello ${user.name} `}</h3>
      <img
        src="https://images.pexels.com/photos/30183849/pexels-photo-30183849/free-photo-of-interieur-minimaliste-avec-vase-noir-et-mur-texture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="profile"
        width="40%"
        height="40%"
      />
      {/* ********************************************************************** */}
      {/* addProduct (productReducer) */}
      <Button
        variant="primary"
        style={{ width: "10%", margin: "2%" }}
        onClick={handleShow}
      >
        Add product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="product's name"
                name="title"
                value={newprod.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="product's description"
                name="description"
                value={newprod.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="Number"
                placeholder="product's number"
                name="price"
                value={newprod.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url of image"
                name="image"
                value={newprod.image}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* diplay My product */}
      <ListProd products={myProduct} isProfile={true} />
    </div>
  );
};

export default Profile;
