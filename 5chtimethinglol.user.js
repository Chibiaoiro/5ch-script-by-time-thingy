// ==UserScript==
// @name         5ch URL remove By seconds passed and isFirstVisit
// @namespace    your-namespace
// @version      1.0
// @description  Remove "/l50" from certain websites' URLs if present after 30 seconds from initial visit or reload
// @author       Chibiaoiro script powered by ChatGPT™︎
// @match        https://*.5ch.net/*
// @match        https://*.open2ch.net/*
// @match        https://*.bbspink.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // スクリプトを初回のアクセスから30秒後のリロードから実行するためのフラグを取得します
    var isFirstVisit = !sessionStorage.getItem('scriptExecuted');
    var currentTime = new Date().getTime();
    var thirtySeconds = 30 * 1000; // 30秒をミリ秒に変換します

    // 初回のアクセスから30秒後のリロード以降にスクリプトを実行します
    if (isFirstVisit || (currentTime - sessionStorage.getItem('lastExecutedTime')) > thirtySeconds) {
        // 現在のURLを取得します
        var currentUrl = window.location.href;

        // URLの末尾に"/l50"があるか確認します
        if (currentUrl.endsWith("/l50")) {
            // "/l50"を削除して修正されたURLを作成します
            var modifiedUrl = currentUrl.slice(0, -4);

            // 修正されたURLにリダイレクトします
            window.location.href = modifiedUrl;
        }

        // スクリプトが実行された時間を記録します
        sessionStorage.setItem('lastExecutedTime', currentTime);

        // スクリプトが実行されたことを示すフラグを設定します
        sessionStorage.setItem('scriptExecuted', 'true');
    }
})();
