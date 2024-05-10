import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

export function EquipmentCard(props) {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {props.title}
          </Typography>
          <Typography>
            {props.description}
          </Typography>
        </CardBody>
      </Card>
    );
  }

EquipmentCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
  };
export default EquipmentCard;