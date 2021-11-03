

const Baidu='https://www.baidu.com/s?wd=';
const Google='https://www.google.com/search?q=';
const Bing='https://cn.bing.com/search?q=';
const Github='https://github.com/search?q=';

const backgroundPageConnection = chrome.runtime.connect({
});
backgroundPageConnection.onMessage.addListener(this.handleMessage)
backgroundPageConnection.postMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    type: 'init'
});

//click
document.getElementById("Execute").addEventListener('click', function(){
    getData();
});

document.getElementById("Clear").addEventListener('click', function(){
    document.getElementById("contentInput").value='';
});

//inurl rule
document.getElementById("BackGround").addEventListener('click', function(){
    const content='inurl:login | inurl:admin | inurl:manage | inurl:member | inurl:admin_login | inurl:login_admin | inurl:system | inurl:login | inurl:user | inurl:main | inurl:cms';
    addContent(content);
});
document.getElementById("UpLoad").addEventListener('click', function(){
    const content='inurl:file | inurl:load | inurl:editor | inurl:Files';
    addContent(content);
});
document.getElementById("SqlInJection").addEventListener('click', function(){
    const content='inurl:?id=';
    addContent(content);
});
document.getElementById("Editor").addEventListener('click', function(){
    const content='inurl:ewebeditor | inurl:editor | inurl:uploadfile | inurl:eweb | inurl:edit';
    addContent(content);
});
document.getElementById("Struts").addEventListener('click', function(){
    const content='inurl:.action | inurl:.do';
    addContent(content);
});

//intitle rule
document.getElementById("DirectoryTraversal").addEventListener('click', function(){
    const content='intitle:index.of';
    addContent(content);
});
document.getElementById("Phpinfo").addEventListener('click', function(){
    const content='intitle:phpinfo';
    addContent(content);
});
document.getElementById("PhpMyAdmin").addEventListener('click', function(){
    const content='intitle:phpmyadmin';
    addContent(content);
});

//ext rule
document.getElementById("Backup").addEventListener('click', function(){
    const content='ext:bk | ext:bak| ext:bkp | ext:old | ext:backup';
    addContent(content);
});
document.getElementById("DataBase").addEventListener('click', function(){
    const content='ext:dbf | ext:sql | ext:mdb';
    addContent(content);
});
document.getElementById("Config").addEventListener('click', function(){
    const content='ext:conf | ext:cnf | ext:cfg | ext:inf | ext:ini | ext:ora | ext:rdp | ext:xml | ext:txt';
    addContent(content);
});
document.getElementById("Log").addEventListener('click', function(){
    const content='ext:log';
    addContent(content);
});
document.getElementById("Document").addEventListener('click', function(){
    const content='ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv';
    addContent(content);
});

//intext rule
document.getElementById("SqlError").addEventListener('click', function(){
    const content='intext:%22sql syntax near%22 | intext:%22syntax error has occurred%22 | intext:%22incorrect syntax near%22 | intext:%22unexpected end of SQL command%22 | intext:%22Warning: mysql_connect()%22 | intext:%22Warning: mysql_query()%22 | intext:%22Warning: pg_connect()%22';
    addContent(content);
});
document.getElementById("FindSys").addEventListener('click', function(){
    const content='intext:管理 | intext:后台 | intext:登陆 | intext:用户名 | intext:密码 | intext:默认密码 | intext:验证码 | intext:系统 | intext:admin | intext:login | intext:sys | intext:management | intext:password | intext:username';
    addContent(content);
});

//filetype rule
document.getElementById("xls").addEventListener('click', function(){
    const content='filetype:xls';
    addContent(content);
});
document.getElementById("pdf").addEventListener('click', function(){
    const content='filetype:pdf';
    addContent(content);
});
document.getElementById("doc").addEventListener('click', function(){
    const content='filetype:doc';
    addContent(content);
});
document.getElementById("ppt").addEventListener('click', function(){
    const content='filetype:ppt';
    addContent(content);
});
document.getElementById("rtf").addEventListener('click', function(){
    const content='filetype:rtf';
    addContent(content);
});

//github rule
document.getElementById("Email").addEventListener('click', function(){
    const content='in:file smtp';
    addContent(content);
});
document.getElementById("Smtp").addEventListener('click', function(){
    const content='in:file email';
    addContent(content);
});
document.getElementById("Password-1").addEventListener('click', function(){
    const content='in:file password';
    addContent(content);
});
document.getElementById("Password-2").addEventListener('click', function(){
    const content='in:file passwd';
    addContent(content);
});
document.getElementById("Password-3").addEventListener('click', function(){
    const content='in:file pass';
    addContent(content);
});
document.getElementById("Password-4").addEventListener('click', function(){
    const content='in:file pwd';
    addContent(content);
});
document.getElementById("DataBase-1").addEventListener('click', function(){
    const content='in:file sa password';
    addContent(content);
});
document.getElementById("DataBase-2").addEventListener('click', function(){
    const content='in:file root password';
    addContent(content);
});
document.getElementById("DataBase-3").addEventListener('click', function(){
    const content="in:file User ID='sa';Password";
    addContent(content);
});
document.getElementById("DataBase-4").addEventListener('click', function(){
    const content='in:file jdbc';
    addContent(content);
});
document.getElementById("Key-1").addEventListener('click', function(){
    const content='in:file public_key';
    addContent(content);
});
document.getElementById("Key-2").addEventListener('click', function(){
    const content='in:file publickey';
    addContent(content);
});
document.getElementById("Key-3").addEventListener('click', function(){
    const content='in:file private_ke';
    addContent(content);
});
document.getElementById("Key-4").addEventListener('click', function(){
    const content='in:file accessKeyId accessKeySecret';
    addContent(content);
});
document.getElementById("Info-1").addEventListener('click', function(){
    const content='filename:config';
    addContent(content);
});
document.getElementById("Info-2").addEventListener('click', function(){
    const content='filename:credential';
    addContent(content);
});
document.getElementById("Info-3").addEventListener('click', function(){
    const content='filename:properties';
    addContent(content);
});
document.getElementById("Info-4").addEventListener('click', function(){
    const content='filename:backup';
    addContent(content);
});
document.getElementById("Info-5").addEventListener('click', function(){
    const content='filename:dump';
    addContent(content);
});
document.getElementById("Info-6").addEventListener('click', function(){
    const content='filename:password';
    addContent(content);
});
document.getElementById("Info-7").addEventListener('click', function(){
    const content='filename:secret';
    addContent(content);
});
document.getElementById("Info-8").addEventListener('click', function(){
    const content='filename:setting';
    addContent(content);
});
document.getElementById("Info-9").addEventListener('click', function(){
    const content='filename:log';
    addContent(content);
});
document.getElementById("Info-10").addEventListener('click', function(){
    const content='filename:sql';
    addContent(content);
});
document.getElementById("Copyright").addEventListener('click', function(){
    const content='in:file Copyright';
    addContent(content);
});
document.getElementById("Language").addEventListener('click', function(){
    const content='language:';
    addContent(content);
});
document.getElementById("IP").addEventListener('click', function(){
    const content='in:file ip';
    addContent(content);
});
document.getElementById("Host").addEventListener('click', function(){
    const content='in:file host';
    addContent(content);
});
document.getElementById("Url").addEventListener('click', function(){
    const content='in:file url';
    addContent(content);
});
document.getElementById("Proxy").addEventListener('click', function(){
    const content='in:file proxy';
    addContent(content);
});
document.getElementById("Auth").addEventListener('click', function(){
    const content='in:file auth';
    addContent(content);
});
document.getElementById("InHome").addEventListener('click', function(){
    const content='in:file 内部';
    addContent(content);
});
document.getElementById("Service-1").addEventListener('click', function(){
    const content='in:file ftp password';
    addContent(content);
});
document.getElementById("Service-2").addEventListener('click', function(){
    const content='in:file svn username password';
    addContent(content);
});
document.getElementById("By").addEventListener('click', function(){
    postData('');
});

function addContent(data){
    document.getElementById("contentInput").value+=' '+data;
}

function getData() {
    var search =$('input:radio:checked').val();
    const target=document.getElementById("targetInput").value
    const content=document.getElementById("contentInput").value
    const speace='  ';

    if (search==undefined){
        postData(Google+target+speace+content);
    }else {
        if (search=='Google'){
            postData(Google+target+speace+content);
        }

        if (search=='Baidu'){
            postData(Baidu+target+speace+content);
        }

        if(search=='Bing'){
            postData(Bing+target+speace+content);
        }
        if(search=='Github'){
            postData(Github+target+speace+content+'&type=code');
        }
    }

}

function postData(data) {
    backgroundPageConnection.postMessage({
        tabId: chrome.devtools.inspectedWindow.tabId,
        type: 'execute',
        data:data
    });
}
