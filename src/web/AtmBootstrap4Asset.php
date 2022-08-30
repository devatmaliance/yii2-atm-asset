<?php

namespace atmaliance\yii2_atm_asset\web;

use yii\bootstrap4\BootstrapAsset;
use yii\web\AssetBundle as BaseAdminLteAsset;
use yii\web\YiiAsset;
use yii\bootstrap4\BootstrapPluginAsset;

class AtmBootstrap4Asset extends BaseAdminLteAsset
{
    public $sourcePath = '@vendor/atmaliance/yii2-atm-asset/src/assets';

    public $css = [
        'css/AdminLTE4.css',
        'css/bootstrap4-custom.css',
    ];

    public $js = [
        'js/adminlte4.js',
    ];

    public $depends = [
        YiiAsset::class,
        BootstrapAsset::class,
        BootstrapPluginAsset::class,
    ];
}
