if (document.documentElement.clientWidth>500){
if (window.pet) {
    var opt = {
        drag: true,
        showChat: true,
        color: "pink",
        size: "small",
        menu: {
            $title: '你想做什么呢？',
            "变身": {
                $title: "吧啦吧啦变身",
                "蓝色": () => {
                    pet.changeColor("blue");
                },
                "绿色": () => {
                    pet.changeColor("green");
                },
                "黄色": () => {
                    pet.changeColor("yellow");
                },
                "红色": () => {
                    pet.changeColor("red");
                },
                "粉红": () => {
                    pet.changeColor("pink");
                },
                "紫色": () => {
                    pet.changeColor("purple");
                },
                "黑色": () => {
                    pet.changeColor("black");
                },
                "棕色": () => {
                    pet.changeColor("brown");
                }
            },
            "改变大小": {
                $title: "变变变",
                "超大": () => {
                    pet.changeSize("large");
                },
                "大": () => {
                    pet.changeSize("big");
                },
                "正常": () => {
                    pet.changeSize("small");
                },
                "小": () => {
                    pet.changeSize("mini");
                },
            },
            "心灵鸡汤": {
                $title: "请选择",
                成功学: () => {
                    pet.sayWords("成功的信念在人脑中的作用就如闹钟，会在你需要时将你唤醒。");
                },
                心理学: () => {
                    pet.sayWords("我會用我的最大熱誠去演這出人生的戲、不怕失敗不怕孤單不怕絕望！一直堅信雨後總會有彩虹！");
                }

            },
            "投喂小精灵": {
                $title: "你要来点什么呢？",
                胡萝卜: () => {
                    pet.sayWords("哼！我又不是小兔子,不要胡萝卜");
                },
                玉米: () => {
                    pet.sayWords("谢谢主人大大");
                }

            },
            "还原设置": {
                $title: "你想还原哪项设置？",
                所有: () => {
                    pet.clearAll();
                    pet.sayWords("操作成功");
                },
                大小: () => {
                    pet.clearAll("size");
                    pet.sayWords("操作成功");
                },
                颜色: () => {
                    pet.clearAll("color");
                    pet.sayWords("操作成功");
                },
                位置: () => {
                    pet.clearAll("pos");
                    pet.sayWords("操作成功");
                },
            },
            '隐藏小精灵': () => {
                pet.hide();
            }
        },
        words: [
            "我们一起聊天吧 ヽ(✿ﾟ▽ﾟ)ノ",
            "咦你想说什么 oAo ?",
            "o(╯□╰)o主人你今天是不是忘做笔记啦！",
            "你走，我没有你这么懒的主人╮(╯▽╰)╭",
            "不要调戏我，我生气超凶的٩(๑`^´๑)۶",
            "看什么看，没见过这么可爱的的小精灵吗？(o°ω°o)",
            "咕~~(╯﹏╰)b，主人主人，我要变身",
        ]
    }
    pet.init(opt)
}
}