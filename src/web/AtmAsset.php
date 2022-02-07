<?php

namespace atmaliance\yii2_atm_asset\web;

use Exception;
use yii\web\AssetBundle as BaseAdminLteAsset;

class AtmAsset extends BaseAdminLteAsset
{
    public $sourcePath = '@vendor/atmaliance/yii2-atm-asset/src/assets';

    public $css = [
        'css/main.css',
        'css/AdminLTE.css',
        'js/toastr.css',
    ];

    public $js = [
        'js/adminlte.js',
        'js/atm72.js',
        'js/toastr-base.js',
        'js/toastr-modal-window.js',
    ];

    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];

    public $skin = '_all-skins';

    public function init()
    {
        // Append skin color file if specified
        if ($this->skin) {
            if (('_all-skins' !== $this->skin) && (strpos($this->skin, 'skin-') !== 0)) {
                throw new Exception('Invalid skin specified');
            }

            $this->css[] = sprintf('css/skins/%s.min.css', $this->skin);
        }

        parent::init();
    }
}
