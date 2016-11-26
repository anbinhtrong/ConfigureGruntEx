using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ConfigureGruntEx.Startup))]
namespace ConfigureGruntEx
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
