/**  @rewrites samesite 방지를 위한 세팅 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.imweb.me"],
    // domains: ['images.unsplash.com']
  },
  async rewrites(){
     return[
     {
       source:"/ec2/login",
       destination:`http://ec2-3-36-209-210.ap-northeast-2.compute.amazonaws.com:8080/login`
     },
     {
       source:"/ec2/reservations",
       destination:`http://ec2-3-36-209-210.ap-northeast-2.compute.amazonaws.com:8080/api/reservations`
     },
     {
       source:"/ec2/reservations/user",
       destination:`http://ec2-3-36-209-210.ap-northeast-2.compute.amazonaws.com:8080/api/reservations/user`
     },
     {
       source:"/ec2/reservations/:path/state",
       destination:`http://ec2-3-36-209-210.ap-northeast-2.compute.amazonaws.com:8080/api/reservations/:path/state`
     }      
     ]
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
