<template>
    <div class="row">
        <div class="col-md-6 col-sm-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Basic Tabs
                </div>
                <div class="panel-body">
                    <ul class="nav nav-tabs">
                        <li class=""><a href="#home" data-toggle="tab" aria-expanded="false">Home</a>
                        </li>
                        <li class=""><a href="#profile" data-toggle="tab" aria-expanded="false">Profile</a>
                        </li>
                        <li class=""><a href="#messages" data-toggle="tab" aria-expanded="false">Messages</a>
                        </li>
                        <li class="active"><a href="#settings" data-toggle="tab" aria-expanded="true">Settings</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade" id="home">
                            <h4>Home Tab</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="tab-pane fade" id="profile">
                            <h4>Profile Tab</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="tab-pane fade" id="messages">
                            <h4>Messages Tab</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="tab-pane fade active in" id="settings">
                            <h4>Settings Tab</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Pill Tabs
                </div>
                <div class="panel-body">
                    <ul class="nav nav-pills">
                        <li class=""><a href="#home-pills" data-toggle="tab" aria-expanded="false">Home</a>
                        </li>
                        <li class=""><a href="#profile-pills" data-toggle="tab" aria-expanded="false">Profile</a>
                        </li>
                        <li class=""><a href="#messages-pills" data-toggle="tab" aria-expanded="false">Messages</a>
                        </li>
                        <li class="active"><a href="#settings-pills" data-toggle="tab" aria-expanded="true">Settings</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade" id="home-pills">
                            <h4>Home Tab</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="tab-pane fade" id="profile-pills">
                            <h4>Profile Tab</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="tab-pane fade" id="messages-pills">
                            <h4>Messages Tab</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="tab-pane fade active in" id="settings-pills">
                            <h4>Settings Tab</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"tabscom3",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.row{
    width: 96%;
    margin: auto;
    padding-top:20px;
}

.panel{
    background: white;
    padding:0 20px;
    padding-bottom: 20px;
}
.panel-heading{
    padding:10px 0;
    font-size: 20px;
    font-weight: 600;
}

.nav-tabs li a {
    margin-right: 2px;
    line-height: 14px;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
}
.nav-pills li a {
     border-radius: 4px;
     line-height: 15px;
}
.nav li a {
    position: relative;
    display: block;
    padding: 10px 15px;
}

.nav-tabs li a:hover {
    /* border-color: #eee #eee #ddd;
    border-bottom: none; */
    text-decoration: none;
    background-color: #eee;
}

 .nav-pills li a:hover {
    /* color: #fff;
    background-color: #337ab7; */
    text-decoration: none;
    background-color: #eee;
}
</style>


