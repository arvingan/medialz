var htmlDialogP = {
		obj: '请选择弹出对象',
		title: false,
		BoxWhere: false,
		diaoID: 'htmlDialogD',
		objRemove: false,
		addClassDiao: '',
		backdropOffdialog: 'OffdialogTrue',
		ngapp: false,
		htmlDialogw: '',
		htmlDialogh: '',
		Dfun: function(config) {
			if (typeof(config.obj) != "undefined") {
				this.obj = config.obj;
			}else{
				this.obj =false;
			}
			if (typeof (config.addClassDiao) != "undefined") {
			    this.addClassDiao = config.addClassDiao;
			}
			if (typeof (config.ngapp) != "undefined") {
			    this.ngapp = config.ngapp;
			} else {
			    this.ngapp = false;
			}
			if (typeof (config.backdropOffdialog) != "undefined") {
			    this.backdropOffdialog = 'OffdialogFalse';
			}
			if (typeof(config.title) != "undefined") {
				this.title = config.title
			};
			if (typeof(config.BoxWhere) != "undefined") {
				this.BoxWhere = config.BoxWhere;
			}else{
				this.BoxWhere =false;
			}
			if (typeof(config.diaoID) != "undefined") {
				this.diaoID = config.diaoID
			};
            
			if (typeof(config.objRemove) != "undefined") {
			    this.objRemove = config.objRemove;
			}else{
                this.objRemove =false;
            }
            console.log(this.objRemove)
			if (typeof (config.htmlDialogw) != "undefined") {
			    this.htmlDialogw = config.htmlDialogw;
			} else {
			    this.htmlDialogw = $(this.obj).width();
			}
			if (typeof (config.htmlDialogh) != "undefined") {
			    this.htmlDialogh = config.htmlDialogh;
			} else {
			    this.htmlDialogh = $(this.obj).height();
			}
			var quickCloseTF;
			if (!this.title) {
				this.title = false
			}
			if (this.BoxWhere) {
				quickCloseTF = false;
			} else {
				quickCloseTF = true;
			}
			
			new dialog({
				id: this.diaoID,
				width: this.htmlDialogw,
				height: this.htmlDialogh,
				skin: 'htmlDialog ' + this.addClassDiao +' '+ this.backdropOffdialog,
				title: this.title,
				content: '<div id="htmlDialog-box-' + this.diaoID + '"></div>',
				obj: this.obj,
				objRemove: this.objRemove,
				ngapp: this.ngapp,
				onshow: function() {
				    var showObjBox = "#htmlDialog-box-" + this.id;
				    if (this.obj != false && this.ngapp == false) {
				        $(this.obj).css("display", "block");
				        $(this.obj).addClass('htmlDialog-remove');
					}
				    
					if (this.ngapp == false) {
					    $(showObjBox).append($(this.obj).clone(true));
					} else {
					    var $div = $($(this.obj).html());
					    $(showObjBox).append($div);
					    setTimeout(function () {
					        angular.element(document.body).injector().invoke(function ($compile) {
					            var scope = angular.element($div).scope();
					            // 只是单纯的编译 html 和 数据之间的关系 
					            $compile($div)(scope);
					            // 必不可少，脏值检查
					            //scope.$digest();
					        });
					    }, 100)
					}
					

					$(showObjBox).find(this.obj).removeClass('htmlDialog-remove');
					$(this.obj + '.htmlDialog-remove').remove();
					$('.ui-popup-follow').hide()
					htmlDialogoffFun(this.id, this.obj, showObjBox)
				},
				onbeforeremove: function () {
				    if (this.obj != false) {
				        $(this.obj).css("display", "none");
				        if (this.objRemove != true && this.ngapp==false) {
				            $('body').append($(this.obj).clone(true));
				        }

				        if (typeof ($('.ui-popup-top-left.ui-popup-follow').get(0)) != "undefined") {
				            $('.ui-popup-follow').hide()
				        }
				        if (typeof ($(this.obj).find('video').get(0)) != "undefined") {
				            setTimeout(function () {
				                $(this.obj).find('video').remove()
				            }, 100)
				        }
				    }
				},
				quickClose: quickCloseTF,
				align: 'right top',
				
			});
			if (this.BoxWhere) {
				dialog.get(this.diaoID).show($(this.BoxWhere).get(0));
			} else {
				dialog.get(this.diaoID).show();
			}
		}
	}

var htmlDialogoffFun = function (diaoID, obj, showObjBox) {
    $('body').one('click', showObjBox + ' .htmlDialogoff', function () {
        dialog.get(diaoID).remove();
        $(obj).css("display", "none");
    });
}

var RegExpInput = {
    Inputobj: '',
    RegExpAttr: 'reInput',
    ILPDTid: '',
    InputTF: false,
    eachfun: '1',
    REIval: '',
    inputmust:'must',
    /*1是正常绑定时间调用，2是遍历检查调用*/
    //3》更具规则生成dialog提示
    ILPDTipBox: function (dialogid, BoxWhere) {
        dialog.get(dialogid).show($(BoxWhere).get(0));
    },
    inputLengthPD: function (Inputobj, num, dialogid, REIregexp, regexptext, dialogstyle) {
        zfnum=num ;
        this.InputTF = false;
        if (regexptext == '手机号不正确') {
            if (dialogstyle == 'add') {
                Inputobj.val(quanjiaoNum(Inputobj.val()))
            }
		    REIregexp = '/^(1[0-9][0-9]|9[0-9][0-9])[0-9]{8}$/';
		    
		}

        if (Inputobj.attr('type') == 'checkbox') {
            this.inputcheckbox(Inputobj, num)
        } else {

            if (typeof (zfnum.split('zf')[1]) != 'undefined') {
                var ilength = getStringLen(Inputobj.val())
                num = num.split('zf')[1]*1
            } else {
                var ilength = Inputobj.val().length;
            }
            //长度判断
            if (ilength == 0 && this.inputmust == 'must') {
                if (this.eachfun == "2") {
                    var ILPDTipBoxContent = '不能为空';
                    this.ILPDTipBox(dialogid, Inputobj);
                    dialog.get(dialogid).content(ILPDTipBoxContent);
                }
            } else {
                if (ilength > num) {
                    if (typeof (zfnum.split('zf')[1]) != 'undefined') {
                        var ILPDTipBoxContent = '限制字符数' + num + '个(中文占用2个字符数)，超出' + (ilength - num) + '个字符';
                    } else {
                        var ILPDTipBoxContent = '限制字数' + num + '个，超出' + (ilength - num) + '个';
                    }
                    
                    this.ILPDTipBox(dialogid, Inputobj);
                    dialog.get(dialogid).content(ILPDTipBoxContent);
                } else {

                    //正则判断
                    if (typeof (REIregexp) != "undefined") {

                        var mySet = eval(REIregexp);
                        if (!mySet.test(Inputobj.val())) {
                            //正则错误
                            if (typeof (regexptext) == "undefined") {
                                regexptext = '格式错误';
                            }
                            var ILPDTipBoxContent = regexptext;
                            if (dialogstyle == 'add') {
                                this.ILPDTipBox(dialogid, Inputobj);
                                dialog.get(dialogid).content(ILPDTipBoxContent);
                            } else {
                                if (dialog.get(dialogid)) {
                                    dialog.get(dialogid).close();
                                }
                            }
                        } else {
                            //特殊字符
                            var mySet = eval("/.*#|&|.*/");
                            //console.log(!mySet.test(Inputobj.val()))
                            //if (mySet.test(Inputobj.val())) {
                            if (false) {
                                regexptext = '请勿使用特殊字符#&<>';
                                this.ILPDTipBox(dialogid, Inputobj);
                                dialog.get(dialogid).content(regexptext);
                            }else{
                                this.InputTF = true;
                                //完全正确
                                if (dialog.get(dialogid)) {
                                    dialog.get(dialogid).close();
                                }
                            }
                        }
                    } else {
                        this.InputTF = true;
                        //完全正确
                        if (dialog.get(dialogid)) {
                            dialog.get(dialogid).close();
                        }
                    }
                }
            }
        }
        return this.InputTF;
    },
    //2》分配触发组件》3
    inputLength: function (Inputobj, num, REIregexp, regexptext, dialogid) {
        //num：限制数字数量
        Inputobj.on('focus', function () {
            RegExpInput.inputLengthPD($(this), num, dialogid, REIregexp, regexptext)
        });
        Inputobj.on('click', function () {
            RegExpInput.inputLengthPD($(this), num, dialogid, REIregexp, regexptext)
        });
        Inputobj.on('keyup', function () {
            RegExpInput.inputLengthPD($(this), num, dialogid, REIregexp, regexptext)
        });
        Inputobj.on('blur', function () {
            RegExpInput.inputLengthPD($(this), num, dialogid, REIregexp, regexptext, 'add')
        });
        Inputobj.on('keydown', function () {
            RegExpInput.inputLengthPD($(this), num, dialogid, REIregexp, regexptext)
        });
    },
    //添加checkbox
    inputcheckbox: function (checkboxobj, checkboxText) {

        function ILPDTipBox(BoxWhere) {
            dialog.get(dialogid).show($(BoxWhere).get(0));
        }
        if (checkboxobj.get(0).checked == false) {
            var dialogid = this.ILPDTid;
            ILPDTipBox(checkboxobj);
            dialog.get(dialogid).content(checkboxText);
            $(this.LABEL).one('click', function () {
                dialog.get(dialogid).close();
            })
        } else {
            this.InputTF = true;
        }
        return this.InputTF;
    },
    //添加Dialog对象》如果已经有只设置ID
    AddDialog: function (obj) {
        this.ILPDTid = obj.attr('id') + 'LPDTip';
        obj.attr("dialogID", this.ILPDTid);
        if (!dialog.get(this.ILPDTid)) {
            var ILPDTipBoxTip = dialog({
                id: this.ILPDTid,
                skin: 'min-dialog-tips LPDTip',
                align: 'top left',
                content: '',
            });
        }
    },
    //根据对象分配算法》2
    REIfun: function (config) {
    	console.log(config.Inputobj)
        for (var i = 0; i < config.Inputobj.length; i++) {
            //对象
            this.Inputobj = $(config.Inputobj.eq(i));
            //正则对象
            this.RegExpFun(config);
            //添加Dialog
            this.AddDialog(this.Inputobj);
            if (this.REIval.length > 1) {
                //引入正则
                this.inputLength(this.Inputobj, this.REIval[0], this.REIval[1], this.REIval[2], this.ILPDTid)
            } else {
                if (this.REIval != "") {
                    //无规则
                } else {
                	
                    if (this.Inputobj.attr('type') == 'checkbox') {
                        this.inputLength(this.Inputobj, this.REIval[0])
                    } else {
                        this.inputLength(this.Inputobj, this.REIval[0])
                    }
                }
            }
        }
    },
    //配置正则内容
    RegExpFun: function (config) {
        if (typeof (config.REIval) != "undefined") {
            this.REIval = config.REIval.split(';');
        } else {
            if (typeof (config.RegExpAttr) != "undefined") {
                this.REIval = config.RegExpAttr.split(';');
            } else {
                this.REIval = this.Inputobj.attr(this.RegExpAttr).split(';');
            }
        }
    },
    eachREIfunTF: function (config) {
        //初始化
        var eachInputTF = true;
        //开始遍历
        for (var i = 0; i < config.Inputobj.length; i++) {
            this.Inputobj = config.Inputobj.eq(i);
            this.RegExpFun(config);
            if (this.Inputobj.get(0).tagName == 'LABEL') {
                this.LABEL = this.Inputobj;
                this.Inputobj = eval('$("#' + this.Inputobj.attr('for') + '")');
            }
            this.AddDialog(this.Inputobj);
            this.eachfun = '2';
            if ($(this.Inputobj).hasClass('notmust')) {
                this.inputmust='notmust'
            }
            if (RegExpInput.inputLengthPD(this.Inputobj, this.REIval[0], this.ILPDTid, this.REIval[1], this.REIval[2], 'add') == false) {
                eachInputTF = false;
            }
        }
        return eachInputTF;
    }
}
hidedialog=function(obj){
	dialog.get($(obj).attr('dialogid')).close();
}