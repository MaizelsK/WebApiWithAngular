using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(WebApiAngularApp.Startup))]
namespace WebApiAngularApp
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}