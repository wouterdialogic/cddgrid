<template>
    <div>
        <div class="w-full h-32" style="background-color: #449388"></div>

        <div class="container mx-auto" style="margin-top: -128px;">
            <div class="py-6 h-screen">
                <div class="flex border border-grey rounded shadow-lg h-full">

                    <!-- Left -->
                    <div class="w-1/3 border flex flex-col">

                        <!-- Header -->
                        <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                            <div>
                                <img class="w-10 h-10 rounded-full" src="http://andressantibanez.com/res/avatar.png"/>
                            </div>

                            <div class="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#727A7E" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                                </div>
                                <div class="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                                </div>
                                <div class="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                                </div>
                            </div>
                        </div>

                        <!-- Search -->
                        <div class="py-2 px-2 bg-grey-lightest">
                            <input type="text" class="w-full px-2 py-2 text-sm" placeholder="Search or start new chat"/>
                        </div>

                        <!-- Conversations -->
                        <div class="bg-grey-lighter flex-1 overflow-auto">
                            
                            <div class="px-3 flex items-center bg-grey-light cursor-pointer">
                                <div>
                                    <img class="h-12 w-12 rounded-full"
                                         src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"/>
                                </div>
                                <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                                    <div class="flex items-bottom justify-between">
                                        <p class="text-grey-darkest">
                                            New Movie! Expendables 4
                                        </p>
                                        <p class="text-xs text-grey-darkest">
                                            12:45 pm
                                        </p>
                                    </div>
                                    <p class="text-grey-dark mt-1 text-sm">
                                        Get Andrés on this movie ASAP!
                                    </p>
                                </div>
                            </div>

                            <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                <div>
                                    <img class="h-12 w-12 rounded-full"
                                         src="https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg"/>
                                </div>
                                <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                                    <div class="flex items-bottom justify-between">
                                        <p class="text-grey-darkest">
                                            Arnold Schwarzenegger
                                        </p>
                                        <p class="text-xs text-grey-darkest">
                                            12:45 pm
                                        </p>
                                    </div>
                                    <p class="text-grey-dark mt-1 text-sm">
                                        I'll be back
                                    </p>
                                </div>
                            </div>
                            <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                <div>
                                    <img class="h-12 w-12 rounded-full"
                                         src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg"/>
                                </div>
                                <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                                    <div class="flex items-bottom justify-between">
                                        <p class="text-grey-darkest">
                                            Russell Crowe
                                        </p>
                                        <p class="text-xs text-grey-darkest">
                                            12:45 pm
                                        </p>
                                    </div>
                                    <p class="text-grey-dark mt-1 text-sm">
                                        Hold the line!
                                    </p>
                                </div>
                            </div>


                            <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                <div>
                                    <img class="h-12 w-12 rounded-full"
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpYTzuO0zLW7yadaq4jpOz2SbsX90okb24Z9GtEvK6Z9x2zS5"/>
                                </div>
                                <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                                    <div class="flex items-bottom justify-between">
                                        <p class="text-grey-darkest">
                                            Tom Cruise
                                        </p>
                                        <p class="text-xs text-grey-darkest">
                                            12:45 pm
                                        </p>
                                    </div>
                                    <p class="text-grey-dark mt-1 text-sm">
                                        Show me the money!
                                    </p>
                                </div>
                            </div>

                            <template v-for="conversation in conversations">

                            <!-- <div v-if="active_conversation == conversation.id" class="px-3 flex items-center bg-grey-light cursor-pointer"> -->
                            <div 
                            :class="{ 'bg-grey-light' : conversation.id == active_conversation_id, 'bg-white': conversation.id != active_conversation_id}" 
                            class="px-3 flex items-center hover:bg-grey-lighter cursor-pointer"
                            @click.prevent="whatsapp_select_conversation(conversation)">
                                <div>
                                    <img class="h-12 w-12 rounded-full"
                                         :src="conversation.conversation_image_link"/>
                                </div>
                                <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                                    <div class="flex items-bottom justify-between">
                                        <p class="text-grey-darkest">
                                            {{conversation.contact_name}}
                                        </p>
                                        <p class="text-xs text-grey-darkest">
                                            {{conversation.last_message_time}}
                                        </p>
                                    </div>
                                    <p class="text-grey-dark mt-1 text-sm">
                                        {{conversation.conversation_title}}
                                    </p>
                                </div>
                            </div>

                            </template>

                            <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                <div>
                                    <img class="h-12 w-12 rounded-full"
                                         src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjE4MTY0NzQ3/harrison-ford-9298701-1-sized.jpg"/>
                                </div>
                                <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                                    <div class="flex items-bottom justify-between">
                                        <p class="text-grey-darkest">
                                            Harrison Ford
                                        </p>
                                        <p class="text-xs text-grey-darkest">
                                            12:45 pm
                                        </p>
                                    </div>
                                    <p class="text-grey-dark mt-1 text-sm">
                                        Tell Java I have the money
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <!-- Right -->
                    <div class="w-2/3 border flex flex-col">

                        <!-- Header -->
                        <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                            <div class="flex items-center">
                                <div>
                                    <img class="w-10 h-10 rounded-full" 
                                    :src="active_conversation.conversation_image_link"/>
                                </div>
                                <div class="ml-4">
                                    <p class="text-grey-darkest">
                                        {{active_conversation.conversation_title}}
                                    </p>
                                    <p class="text-grey-darker text-xs mt-1">
                                        {{active_conversation.participants}}
                                    </p>
                                </div>
                            </div>

                            <div class="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
                                </div>
                                <div class="ml-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>
                                </div>
                                <div class="ml-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                                </div>
                            </div>
                        </div>

                        <!-- Messages -->
                        <div id="whatsapp_messages" class="flex-1 overflow-auto" style="background-color: #DAD3CC">
                            <div class="py-2 px-3">

                                <div class="flex justify-center mb-2">
                                    <div class="rounded py-2 px-4" style="background-color: #DDECF2">
                                        <p class="text-sm uppercase">
                                            February 20, 2018
                                        </p>
                                    </div>
                                </div>

                                <div class="flex justify-center mb-4">
                                    <div class="rounded py-2 px-4" style="background-color: #FCF4CB">
                                        <p class="text-xs">
                                            Messages to this chat and calls are now secured with end-to-end encryption. Tap for more info.
                                        </p>
                                    </div>
                                </div>

                                <div class="flex mb-2">
                                    <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                        <p class="text-sm text-teal">
                                            Sylverter Stallone
                                        </p>
                                        <p class="text-sm mt-1">
                                            Hi everyone! Glad you could join! I am making a new movie.
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            12:45 pm
                                        </p>
                                    </div>
                                </div>

                                <div class="flex mb-2">
                                    <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                        <p class="text-sm text-purple">
                                            Tom Cruise
                                        </p>
                                        <p class="text-sm mt-1">
                                            Hi all! I have one question for the movie
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            12:45 pm
                                        </p>
                                    </div>
                                </div>

                                <div class="flex mb-2">
                                    <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                        <p class="text-sm text-orange">
                                            Harrison Ford
                                        </p>
                                        <p class="text-sm mt-1">
                                            Again?
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            12:45 pm
                                        </p>
                                    </div>
                                </div>

                                <div class="flex mb-2">
                                    <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                        <p class="text-sm text-orange">
                                            Russell Crowe
                                        </p>
                                        <p class="text-sm mt-1">
                                            Is Andrés coming for this one?
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            12:45 pm
                                        </p>
                                    </div>
                                </div>

                                <div class="flex mb-2">
                                    <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                        <p class="text-sm text-teal">
                                            Sylverter Stallone
                                        </p>
                                        <p class="text-sm mt-1">
                                            He is. Just invited him to join.
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            12:45 pm
                                        </p>
                                    </div>
                                </div>
                            
                            <template v-for="message in messages">
                                <div class="flex justify-end mb-2">
                                    <div class="rounded py-2 px-3" style="background-color: #33ffcc">
                                        <p class="text-sm mt-1">
                                            {{message.content}}
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            {{message.time}}
                                        </p>
                                    </div>
                                </div>
                            </template>
                                <div class="flex justify-end mb-2">
                                    <div class="rounded py-2 px-3" style="background-color: #E2F7CB">
                                        <p class="text-sm mt-1">
                                            Count me in
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            12:45 pm
                                        </p>
                                    </div>
                                </div>

                                <div class="flex mb-2">
                                    <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                        <p class="text-sm text-purple">
                                            Tom Cruise
                                        </p>
                                        <p class="text-sm mt-1">
                                            Get Andrés on this movie ASAP!
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            12:45 pm
                                        </p>
                                    </div>
                                </div>

                                <div class="flex justify-end mb-2" v-for="message in messages">
                                    <div class="rounded py-2 px-3" style="background-color: #E2F7CB">
                                        <p class="text-sm mt-1">
                                            {{message.message}}
                                        </p>
                                        <p class="text-right text-xs text-grey-dark mt-1">
                                            {{message.date}}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Input -->
                        <div class="bg-grey-lighter px-4 py-4 flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".45" fill="#263238" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
                            </div>
                            <div class="flex-1 mx-4">
                                <input @keyup.enter="whatsapp_submit" v-model="whatsapp_message" class="w-full border rounded px-2 py-2" type="text"/>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WhatsAppClone',
  props: {

  },
  data: function() {
    return {
        imagelinks: ["https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"],
        whatsapp_message: '',
        messages: [],
        active_conversation_id: '', 
        active_conversation: {
            messages: [],
        },
        conversations: [],
        user: {
            id: 1,
            contact_name: "wouter",
            //user_image_link: this.imageLinks[0],
        },
        conversation: {
            id: String,
            contact_name: String,
            conversation_title: String,
            conversation_image_link: String,
            last_message_time: String,
            messages: [],
        },
        message: {
            id: String,
            contact_name: String,
            contact_color: String,
            content: String,
            time: String,
        },
    }
  },

  created() {
    this.get_conversations();
  },

  updated(){
      var element = document.getElementById("whatsapp_messages");
      element.scrollTop = 55500;
    },

  methods: {
    get_messages(conversation) {
        // messages = get from server where conversation_id = 33 and own contact_id = 4234;

        var message = {
            id: 1,
            contact_name: "wouter",
            contact_color: "teal",
            content: "i like monkeys",
            time: '12:23 pm',
        };

        this.messages.push(message);              

        var message = {
            id: 2,
            contact_name: "titia",
            contact_color: "red",
            content: "i like monkeys too",
            time: '12:43 pm',
        };

        this.messages.push(message);       

        console.log(this.messages);

    },

    get_conversations() {
        this.conversation = {
            id: 1,
            contact_name: "wouter",
            participants: "wouter, dirk, mongrol",
            conversation_title: "koppers",
            conversation_image_link: "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjE4MTY0NzQ3/harrison-ford-9298701-1-sized.jpg",
            last_message_time: '12:12 pm',
        };

        this.conversations.push(this.conversation);        
        this.conversation = {
            id: 2,
            contact_name: "titia",
            participants: "wouter, titia, monkey, mongrol",
            conversation_title: "lelie",
            conversation_image_link: "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjE4MTY0NzQ3/harrison-ford-9298701-1-sized.jpg",
            last_message_time: '12:34 pm',
        };

        this.conversations.push(this.conversation);        
        console.log(this.conversations);
    },

    whatsapp_submit() {
        var whatsapp_message = this.whatsapp_message.trim()
        if (whatsapp_message == '') return;

        this.messages.push({message: whatsapp_message, date:this.get_hour_and_minutes() });
        this.whatsapp_message = '';
    },

    whatsapp_select_conversation(conversation) { 
        //set active conversation
        this.active_conversation_id = conversation.id;
        this.active_conversation = this.conversations.find(x => x.id === conversation.id);
        this.get_messages(conversation);
    },

    scroll_to_bottom() {
        //sleep(1000)
        //var objDiv = document.getElementById("whatsapp_messages");
        //objDiv.scrollTop = objDiv.scrollHeight;
    },

    get_hour_and_minutes() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
        //return 'ye';
    }
  }
}
</script>

<style>

</style>
