import React from "react";
import './bioBlocks.css';
import reactIcon from './bio-block-icons/react-tech-icon.svg';
import jsIcon from './bio-block-icons/js-tech-icon.svg';
import gitIcon from './bio-block-icons/git-tech-icon.svg';
import phpStormIcon from './bio-block-icons/phpstorm-tech-icon.svg';
import railsIcon from './bio-block-icons/rails-tech-icon.svg';

// This is static top section of the page and gives it semantic value.
function BioBlocks() {

    return (
        <section className="bio-blocks">
            <a className="block" href="https://maxar.com/" rel="noopener noreferrer" target="_blank">
                <div className="block__header">
                    <h5>Working as a…</h5>
                    <h3>Full-Stack Software Engineer</h3>
                </div>
                <div className="block__tools">
                    <p>Using:</p>
                    <div className="blocks__tool-icons">
                        <img src={reactIcon} alt="React logo" />
                        <img src={jsIcon} alt="JavaScript logo" />
                        <img src={railsIcon} alt="Rails logo" />
                        <img src={gitIcon} alt="Git logo" />
                        <img src={phpStormIcon} alt="PHPStorm logo" />
                    </div>
                </div>
                <div className="block__meta-container">
                    <div className="block__meta">
                        Maxar


                    </div>
                    <div className="block__meta">
                        <p className="block__meta-text block__work-cta">Visit</p>
                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            className="block__icon-right"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.84305 1.279L5.33859 0.783465C5.54841 0.573643 5.8877 0.573643 6.09528 0.783465L10.4346 5.12052C10.6444 5.33034 10.6444 5.66963 10.4346 5.87722L6.09528 10.2165C5.88546 10.4263 5.54618 10.4263 5.33859 10.2165L4.84305 9.72097C4.631 9.50891 4.63546 9.16293 4.85198 8.95534L7.54171 6.39284L1.12653 6.39284C0.82966 6.39284 0.59082 6.154 0.59082 5.85713L0.59082 5.14284C0.59082 4.84597 0.82966 4.60713 1.12653 4.60713L7.54171 4.60713L4.85198 2.04463C4.63323 1.83704 4.62877 1.49105 4.84305 1.279Z" />
                        </svg>
                    </div>
                </div>


            </a>

        </section>
    )
}


export default BioBlocks;