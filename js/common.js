$(function () {
    //页面滚动出现返回顶部
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backUp').fadeIn('slow');
        } else {
            $('#backUp').fadeOut('slow');
        }
    });
    $('#backUp').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });


    //底部四个
    $('.foot-contact li').mouseenter(function () {
        $(this).children('img').attr('src',$(this).children('img').attr('src').split('.')[0]+'_hover'+'.png')
    }).mouseleave(function () {
        $(this).children('img').attr('src',$(this).children('img').attr('src').split('_')[0]+'.png')
    })


    //添加用户信息模态框
    var addModal = $('#addModal')
    var addForm = $('#addform')
    formValidator(addForm)

    $('.btn-close, .close').click(function () {
        $('#username').val('')
        $('#phone').val('')
        $('#email').val('')
        $('#company').val('')
        $('#question').val('')
        formReset(addModal, addForm)
    })

    //添加的提交按钮
    $('#addSubmitBtn').click(function () {
        var bv = addForm.data('bootstrapValidator');
        bv.validate();
        if(bv.isValid()){
            var username = $('#username').val()
            var phone = $('#phone').val()
            var email = $('#email').val()
            var company = $('#company').val()
            var question = $('#question').val()
            $.ajax({
                url:'http://39.105.105.172:9999/customer/addCustomerInfo',
                type:'post',
                dataType:'json',
                data:{
                    'customerName':username,
                    'customerPhone':phone,
                    'customerEmail':email,
                    'customerCompany':company,
                    'customerProblem':question
                },
                success:function (data) {

                }
            })

            addModal.modal('hide')
            $('#username').val('')
            $('#phone').val('')
            $('#email').val('')
            $('#company').val('')
            $('#question').val('')
            formReset(addModal, addForm)

        }
    })


//    底部
    var falg1 = true;
    $('.footer .post-title').click(function () {
        if(falg1){
            $(this).siblings().show(100)
            $(this).children('i').children('img').attr('src','images/small/arrowup1.png')
            falg1 = false
        }else {
            $(this).siblings().hide(100)
            $(this).children('i').children('img').attr('src','images/small/arrowdown1.png')
            falg1 = true
        }
    })

})



//表单验证
function formValidator(form) {
    form.bootstrapValidator({
        message: '输入值不合法',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名不合法',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: '请输入1到30个字符'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\. \u4e00-\u9fa5 ]+$/,
                        message: '用户名只能由字母、数字、点、下划线和汉字组成 '
                    }
                }
            },  phone: {
                validators: {
                    notEmpty: {
                        message: '联系方式不能为空'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: '联系方式应由数字组成'
                    }
                }
            }, email: {
                validators: {
                    notEmpty: {
                        message: 'email不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮件地址如：123@qq.com'
                    }
                }
            },company: {
                validators: {
                    notEmpty: {
                        message: '公司名称不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 50,
                        message: '请输入1到50个字符'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\. \u4e00-\u9fa5 ]+$/,
                        message: '用户名只能由字母、数字、点、下划线和汉字组成 '
                    }
                }
            }
        }
    });
}
//重置表单验证
function formReset(modal,form) {
    modal.on('hidden.bs.modal', function () {
        form.data('bootstrapValidator').destroy();
        form.data('bootstrapValidator', null);
        formValidator(form);
    });
}
