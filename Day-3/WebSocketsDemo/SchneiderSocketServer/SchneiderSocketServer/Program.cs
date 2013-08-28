using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Fleck;

namespace SchneiderSocketServer
{
    class Program
    {
        static void Main(string[] args)
        {
            var connections = new List<IWebSocketConnection>();
            var server = new WebSocketServer("ws://localhost:9090/SocketServer");
            server.Start(con =>
                {
                    con.OnOpen += () =>
                        {
                            Console.WriteLine("A new connection is established");
                            connections.Add(con);
                        };
                    con.OnClose += () =>
                        {
                            Console.WriteLine("An existing connection is closed");
                            connections.Remove(con);
                        };
                    con.OnMessage += s =>
                        {
                            Console.WriteLine("Message received - {0}", s);
                            foreach (var socketConnection in connections)
                            {
                                if (socketConnection != con)
                                    socketConnection.Send(s);
                            }

                        };
                });
            var input = string.Empty;
            Console.WriteLine("Server runnint... type 'exit' to shutdown or any other message to send to the client...");
            while ((input = Console.ReadLine()) != "exit")
            {
                foreach (var connection in connections)
                {
                    connection.Send(input);
                }
            }
        }
    }
}
