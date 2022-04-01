<?php

namespace atmaliance\yii2_atm_asset\web;

use Exception;
use yii\web\AssetBundle as BaseAdminLteAsset;
use yii\bootstrap\BootstrapPluginAsset;
use yii\bootstrap\BootstrapAsset;
use yii\web\YiiAsset;

final class AtmBootstrap3Asset extends BaseAdminLteAsset
{
    public $sourcePath = '@vendor/atmaliance/yii2-atm-asset/src/assets';

    public $css = [
        'css/bootstrap3-custom.css',
        'css/AdminLTE.css',
    ];

    public $js = [
        'js/adminlte.js',
    ];

    public $depends = [
        YiiAsset::class,
        BootstrapAsset::class,
        BootstrapPluginAsset::class,
    ];

    public string $skin = '_all-skins';

    public function init(): void
    {
        if (!empty($this->skin)) {
            if (('_all-skins' !== $this->skin) && (strpos($this->skin, 'skin-') !== 0)) {
                throw new Exception('Invalid skin specified');
            }

            $this->css[] = sprintf('css/skins/%s.min.css', $this->skin);
        }

        parent::init();
    }
}
