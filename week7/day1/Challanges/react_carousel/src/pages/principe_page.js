import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class DemoCarousel extends React.Component {
    onChange = (index) => {
        console.log("Slide changed to:", index);
    };

    onClickItem = (index) => {
        console.log("Item clicked:", index);
    };

    onClickThumb = (index) => {
        console.log("Thumbnail clicked:", index);
    };

    render() {
        const imageStyle = {
            width: "50%",
            margin: "0 auto",
            display: "block",
        };

        const legendStyle = {
            width: "50%",
            margin: "10px auto",
            textAlign: "center",
            background: "rgb(0, 0, 0)",
            color: "white",
            padding: "15px",
            borderRadius: "5px",
        };

        return (
            <Carousel
                showArrows={true}
                onChange={this.onChange}
                onClickItem={this.onClickItem}
                onClickThumb={this.onClickThumb}
            >
                <div>
                    <img
                        style={imageStyle}
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
                        alt="Legend 1"
                    />
                    <p style={legendStyle}>Hong Kong</p>
                </div>
                <div>
                    <img
                        style={imageStyle}
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
                        alt="Legend 2"
                    />
                    <p style={legendStyle}>Macao</p>
                </div>
                <div>
                    <img
                        style={imageStyle}
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
                        alt="Legend 3"
                    />
                    <p style={legendStyle}>Japan</p>
                </div>
                <div>
                    <img
                        style={imageStyle}
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
                        alt="Legend 4"
                    />
                    <p style={legendStyle}>Las Vegas</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;
