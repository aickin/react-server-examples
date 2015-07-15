import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";

export default class FullWidthGrid extends React.Component {
	render() {
		return (
			<Grid>
				<Col>
					<Row xs={12} md={12}>
						{this.props.children}
					</Row>
				</Col>
			</Grid>
		);
	}
}