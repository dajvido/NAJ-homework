(function () {
  angular.module('mail_receiver.service', [])
    .service('ReceivedMails', ReceivedMails);

  function ReceivedMails() {
    return {
      fetchRecAll: function() {
        return list;
      },
      fetchSentAll: function() {
        return [];
      }
    }
  }

  var list = [
    {
      "id": "1433316023817",
      "read": false,
      "title": "enim minus at esse dolorem aut est dolores",
      "sender": "Ahmad_Mohr@gmail.com",
      "content": "suscipit est quod dolorem cumque corrupti odit tempora deleniti\nsit architecto quo ducimus dolorem atque doloremque quia\nsint aut praesentium consequuntur voluptatem optio itaque\ndeserunt repellendus sequi tempora reiciendis necessitatibus sunt inventore quia totam\n \r\tquis possimus dolor praesentium quam\nid facilis rerum necessitatibus maxime mollitia\ntemporibus porro perspiciatis repellendus harum id\net doloribus non voluptatem illo\nenim cum tenetur maiores porro occaecati nisi quia voluptas aut\nnam optio ut quo\n \r\tasperiores officiis et eius sint enim quasi nihil aut\naperiam error voluptates\nnecessitatibus qui quo facilis eaque non alias repudiandae ipsum consequuntur\net tempore itaque esse veritatis nihil id\nnumquam repudiandae iure quasi ullam autem omnis",
      "received": 1433316023829
    },
    {
      "id": "1433316023818",
      "read": false,
      "title": "enim minus at esse dolorem aut est dolores",
      "sender": "Ahmad_Mohr@gmail.com",
      "content": "suscipit est quod dolorem cumque corrupti odit tempora deleniti\nsit architecto quo ducimus dolorem atque doloremque quia\nsint aut praesentium consequuntur voluptatem optio itaque\ndeserunt repellendus sequi tempora reiciendis necessitatibus sunt inventore quia totam\n \r\tquis possimus dolor praesentium quam\nid facilis rerum necessitatibus maxime mollitia\ntemporibus porro perspiciatis repellendus harum id\net doloribus non voluptatem illo\nenim cum tenetur maiores porro occaecati nisi quia voluptas aut\nnam optio ut quo\n \r\tasperiores officiis et eius sint enim quasi nihil aut\naperiam error voluptates\nnecessitatibus qui quo facilis eaque non alias repudiandae ipsum consequuntur\net tempore itaque esse veritatis nihil id\nnumquam repudiandae iure quasi ullam autem omnis",
      "received": 1433316023829
    }
  ];
}());
