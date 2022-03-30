import React, { Component } from "react";

export default class NotFound extends Component {
    render() {
        require("../../styles/notfound.css")
        return (
            <div>
                <header class="top-header"/>

                <div>
                    <div class="starsec"></div>
                    <div class="starthird"></div>
                    <div class="starfourth"></div>
                    <div class="starfifth"></div>
                </div>

                <div class="lamp__wrap">
                    <div class="lamp">
                        <div class="cable"></div>
                        <div class="cover"></div>
                        <div class="in-cover">
                            <div class="bulb"/>
                        </div>
                        <div class="light"/>
                    </div>
                </div>

                <section class="error">
                    <div class="error__content">
                        <div class="error__message message">
                        <h1 class="message__title">404</h1>
                            <h2 class="message__text">Кажется, вы пытаетесь перейти на страницу, которой не существует.</h2>
                        </div>
                        <div class="error__nav e-nav">
                        <a href="/" class="e-nav__link"></a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}