import React from "react";
import './mainArticleContainer.css';
import Container from 'react-bootstrap/Container';

// This is static top section of the page and gives it semantic value.
function MainArticleContainer() {

    return (
        <section
            className="mainThumbnailContainer">
            <Container>

                <h3>Coming Soon!</h3>

            </Container>

        </section>
    )
}


export default MainArticleContainer;
