<?php

namespace atmaliance\yii2_atm_asset\web;

use yii\web\AssetBundle as BaseAdminLteAsset;
use yii\web\YiiAsset;

final class AtmAsset extends BaseAdminLteAsset
{
    public $sourcePath = '@vendor/atmaliance/yii2-atm-asset/src/assets';

    public $css = [
        'css/toastr.css',
        'css/notiflix-3.2.5.min.css',
    ];

    public $js = [
        'js/atm72.js',
        'js/toastr.min.js',
        'js/toastr-modal-window.js',
        'js/eventsource.min.js',
        'js/push.min.js',
        'js/notiflix-block-aio.js',
        'js/notiflix-loading-aio.js',
    ];

    public $depends = [
        YiiAsset::class,
    ];
}
