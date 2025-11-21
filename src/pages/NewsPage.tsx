import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import {
  Play,
  ThumbsUp,
  Share2,
  TrendingUp,
  Youtube,
  Grid3x3,
  List,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Link2,
  MessageCircle,
  Send,
  Instagram,
  X,
  FileText,
  Clock,
} from "lucide-react";

export function NewsPage() {
  const [activeTab, setActiveTab] = useState<"videos" | "articles">("videos");
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showShareToast, setShowShareToast] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [shareMenuVideo, setShareMenuVideo] = useState<number | null>(null);

  // Share functionality - Open share menu
  const handleShare = async (videoIndex: number) => {
    setShareMenuVideo(videoIndex);
    setShowShareMenu(true);
  };

  // Copy link to clipboard
  const copyToClipboard = async (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;

    try {
      await navigator.clipboard.writeText(videoUrl);
      setShowShareToast(true);
      setShowShareMenu(false);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Share to specific platforms
  const shareToFacebook = (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      videoUrl
    )}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  const shareToTwitter = (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
    const text = `Check out: ${video.title}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(videoUrl)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  const shareToLinkedIn = (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      videoUrl
    )}`;
    window.open(linkedInUrl, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  const shareToWhatsApp = (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
    const text = `Check out this video: ${video.title} - ${videoUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setShowShareMenu(false);
  };

  const shareToTelegram = (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
    const text = `${video.title}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      videoUrl
    )}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, "_blank");
    setShowShareMenu(false);
  };

  const shareToEmail = (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
    const subject = `Check out: ${video.title}`;
    const body = `I thought you might be interested in this video:\n\n${video.title}\n\n${videoUrl}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setShowShareMenu(false);
  };

  // Note: Instagram and TikTok don't support direct web sharing
  // These will copy the link with a message
  const shareToInstagram = async (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;

    try {
      await navigator.clipboard.writeText(videoUrl);
      setShowShareToast(true);
      setShowShareMenu(false);
      setTimeout(() => setShowShareToast(false), 3000);
      alert(
        "Link copied! Open Instagram app and paste the link in your story or message."
      );
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToTikTok = async (videoIndex: number) => {
    const video = videos[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;

    try {
      await navigator.clipboard.writeText(videoUrl);
      setShowShareToast(true);
      setShowShareMenu(false);
      setTimeout(() => setShowShareToast(false), 3000);
      alert(
        "Link copied! Open TikTok app and paste the link in your video description or comment."
      );
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // ============================================================================
  // ✅ EASY YOUTUBE VIDEO SETUP - JUST PASTE YOUR YOUTUBE LINKS BELOW!
  // ============================================================================
  //
  // INSTRUCTIONS: Simply paste your full YouTube URLs in the videoLinks array below
  //
  // Supported formats:
  //   ✓ https://www.youtube.com/watch?v=DYSeJfh_LyU&t=15s
  //   ✓ https://www.youtube.com/watch?v=coGuUH6OW0U
  //   ✓ https://www.youtube.com/watch?v=TpBTfdASGHk
  //   ✓ https://www.youtube.com/watch?v=8GWVfo27tN0
  //   ✓ https://www.youtube.com/watch?v=SklEKtkSyHc
  //   ✓ https://www.youtube.com/watch?v=3EhVa2yOmFg
  //
  // ============================================================================

  const videoLinks = [
    "https://www.youtube.com/watch?v=DYSeJfh_LyU&t=15s", // ← PASTE YOUR VIDEO 1 URL HERE
    "https://www.youtube.com/watch?v=coGuUH6OW0U", // ← PASTE YOUR VIDEO 2 URL HERE
    "https://www.youtube.com/watch?v=TpBTfdASGHk", // ← PASTE YOUR VIDEO 3 URL HERE
    "https://www.youtube.com/watch?v=8GWVfo27tN0", // ← PASTE YOUR VIDEO 4 URL HERE
    "https://www.youtube.com/watch?v=SklEKtkSyHc", // ← PASTE YOUR VIDEO 5 URL HERE
    "https://www.youtube.com/watch?v=3EhVa2yOmFg", // ← PASTE YOUR VIDEO 6 URL HERE
  ];

  // Helper function to extract video ID from various YouTube URL formats
  const extractVideoId = (url: string): string => {
    if (!url || url.startsWith("PASTE_YOUR_VIDEO")) return url;

    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
      /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) return match[1];
    }

    return url; // Return as-is if no pattern matches
  };

  // Helper function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (videoId: string): string => {
    // YouTube provides thumbnails in standard format
    // Using maxresdefault for highest quality
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const videos = [
    {
      id: extractVideoId(videoLinks[0]),
      thumbnail: getYouTubeThumbnail(extractVideoId(videoLinks[0])),
      title:
        "You are invited for FREE! at the 3rd International Trade Seminar - FCIE Cavite on Nov. 28, 2025",
      description:
        "Join us for the 3rd International Trade Seminar hosted by FCIE Cavite. Learn about global trade opportunities and networking with industry leaders.",
      duration: "12:45",
      views: "15.2K",
      uploadedDate: "3 days ago",
      category: "Event",
    },
    {
      id: extractVideoId(videoLinks[1]),
      thumbnail: getYouTubeThumbnail(extractVideoId(videoLinks[1])),
      title:
        "FEDMUR and UNIVERSAL as Gold Sponsors at the 73rd PSME (NATCON) and the 13th (PHILMACH) 2025.",
      description:
        "FEDMUR and UNIVERSAL proudly supporting the Philippine engineering community as Gold Sponsors at the 73rd PSME National Convention and 13th Philippine Machinery Fair.",
      duration: "8:23",
      views: "23.5K",
      uploadedDate: "1 week ago",
      category: "Sponsorship",
    },
    {
      id: extractVideoId(videoLinks[2]),
      thumbnail: getYouTubeThumbnail(extractVideoId(videoLinks[2])),
      title:
        "FEDMUR and UNIVERSAL - Gold Sponsors of the upcoming 73rd PSME (NATCON) and 13th (PHILMACH), 2025",
      description:
        "Announcing our Gold Sponsorship for the upcoming 73rd PSME National Convention and 13th Philippine Machinery Fair. Join us at this premier industry event.",
      duration: "6:15",
      views: "8.7K",
      uploadedDate: "2 weeks ago",
      category: "Sponsorship",
    },
    {
      id: extractVideoId(videoLinks[3]),
      thumbnail: getYouTubeThumbnail(extractVideoId(videoLinks[3])),
      title:
        "Global Purchasing & International Trade Seminar at the PSIM 5th National Convention 2025",
      description:
        "Highlights from the Global Purchasing & International Trade Seminar at the Philippine Society of Industrial Managers 5th National Convention.",
      duration: "10:32",
      views: "31.4K",
      uploadedDate: "3 weeks ago",
      category: "Seminar",
    },
    {
      id: extractVideoId(videoLinks[4]),
      thumbnail: getYouTubeThumbnail(extractVideoId(videoLinks[4])),
      title:
        "Engr. Lino Diamante sponsored Filipino Designers and Consultants who traveled to China",
      description:
        "Engr. Lino Diamante supports Filipino engineering professionals through sponsoring their educational trip to China to explore industry innovations.",
      duration: "14:18",
      views: "19.8K",
      uploadedDate: "1 month ago",
      category: "Industry Visit",
    },
    {
      id: extractVideoId(videoLinks[5]),
      thumbnail: getYouTubeThumbnail(extractVideoId(videoLinks[5])),
      title:
        "Traveled to Las Vegas Nevada, to attend the Water WasteExpo 2025, held from May 5 - 8.",
      description:
        "Our team traveled to Las Vegas, Nevada to attend the Water WasteExpo 2025, the premier water and wastewater industry event held from May 5-8.",
      duration: "7:42",
      views: "12.3K",
      uploadedDate: "1 month ago",
      category: "Trade Show",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* YouTube-Style Header */}
      <section className="relative pt-24 pb-8 bg-[#0f0f0f] border-b border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-full flex items-center justify-center">
                <Youtube className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-white text-3xl mb-1">
                  Diamante Techno TV Channel
                </h1>
                <p className="text-gray-400 text-sm">
                  Industrial Piping Solutions • Educational Content • Company
                  Updates
                </p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@Diamantetechnotv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors flex items-center gap-2">
                <Youtube className="w-5 h-5" />
                Visit page
              </button>
            </a>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-8 border-b border-gray-800">
            <button
              onClick={() => setActiveTab("videos")}
              className={`pb-3 px-2 relative transition-colors ${
                activeTab === "videos"
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Videos
              {activeTab === "videos" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`pb-3 px-2 relative transition-colors ${
                activeTab === "articles"
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Articles
              {activeTab === "articles" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Videos Tab */}
      {activeTab === "videos" && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Featured Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Video Player */}
                <div className="lg:col-span-2">
                  <div className="bg-black rounded-2xl overflow-hidden">
                    {/* ============================================================
                         PLACEHOLDER VIDEO PLAYER (Disabled - using real YouTube player below)
                         ============================================================
                         Re-enable this if you want to show thumbnails instead of embedded videos
                         ============================================================ */}
                    {/* 
                    <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                      <ImageWithFallback
                        src={videos[selectedVideo].thumbnail}
                        alt={videos[selectedVideo].title}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                        <button className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl">
                          <Play className="w-10 h-10 text-white ml-1" />
                        </button>
                      </div>
                      <div className="absolute top-4 right-4 px-2 py-1 bg-black/80 text-white text-sm rounded">
                        {videos[selectedVideo].duration}
                      </div>
                    </div>
                    */}

                    {/* ============================================================
                         REAL YOUTUBE VIDEO PLAYER - ✅ ENABLED
                         ============================================================
                         This is now active and will display real YouTube videos
                         First video (DYSeJfh_LyU) is a working example
                         ============================================================ */}
                    <iframe
                      className="w-full aspect-video rounded-2xl"
                      src={`https://www.youtube.com/embed/${videos[selectedVideo].id}`}
                      title={videos[selectedVideo].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Info */}
                  <div className="mt-4">
                    <h2 className="text-white text-2xl mb-3">
                      {videos[selectedVideo].title}
                    </h2>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-[#29ABE2]/20 text-[#29ABE2] text-xs rounded-full">
                          {videos[selectedVideo].category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          Like
                        </button>
                        <button
                          onClick={() => handleShare(selectedVideo)}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                    </div>

                    {/* Video Description */}
                    <div className="bg-gray-900/50 rounded-xl p-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {videos[selectedVideo].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Up Next / Playlist */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h3 className="text-white mb-4 flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Up Next
                    </h3>
                    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                      {videos.map((video, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => setSelectedVideo(index)}
                          className={`w-full flex gap-3 p-2 rounded-lg transition-all hover:bg-gray-800/50 group ${
                            selectedVideo === index ? "bg-gray-800/50" : ""
                          }`}
                        >
                          <div className="relative w-40 shrink-0">
                            <ImageWithFallback
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full aspect-video object-cover rounded"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                              <Play className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-white text-xs rounded">
                              {video.duration}
                            </div>
                          </div>
                          <div className="flex-1 text-left">
                            <h4 className="text-white text-sm mb-1 line-clamp-2 group-hover:text-[#29ABE2] transition-colors">
                              {video.title}
                            </h4>
                            <div className="text-gray-400 text-xs">
                              <span className="px-2 py-0.5 bg-[#29ABE2]/20 text-[#29ABE2] rounded">
                                {video.category}
                              </span>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* All Videos Grid */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-xl">All Videos</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 xl:grid-cols-3 gap-4"
                    : "space-y-4"
                }
              >
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setSelectedVideo(index);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="group cursor-pointer"
                  >
                    {viewMode === "grid" ? (
                      <div>
                        {/* Thumbnail */}
                        <div className="relative mb-3">
                          <ImageWithFallback
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full aspect-video object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all rounded-xl flex items-center justify-center">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                              <Play className="w-6 h-6 text-white ml-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/90 text-white text-xs rounded">
                            {video.duration}
                          </div>
                        </div>

                        {/* Info */}
                        <div>
                          <h3 className="text-white text-sm mb-2 line-clamp-2 group-hover:text-[#29ABE2] transition-colors">
                            {video.title}
                          </h3>
                          <span className="px-2 py-0.5 bg-[#29ABE2]/20 text-[#29ABE2] text-xs rounded">
                            {video.category}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-900/50 transition-colors">
                        <div className="relative w-64 shrink-0">
                          <ImageWithFallback
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <Play className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/90 text-white text-xs rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white text-lg mb-2 group-hover:text-[#29ABE2] transition-colors">
                            {video.title}
                          </h3>
                          <div className="mb-3">
                            <span className="px-3 py-1 bg-[#29ABE2]/20 text-[#29ABE2] text-xs rounded-full">
                              {video.category}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm line-clamp-2">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Tab */}
      {activeTab === "articles" && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Coming Soon Message */}
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-linear-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-12 max-w-2xl"
                >
                  <div className="w-20 h-20 bg-linear-to-br from-[#29ABE2] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-3xl text-white mb-4">
                    Articles Coming Soon
                  </h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    We're working on bringing you the latest news, industry
                    insights, and updates about WSISCo. Check back soon for
                    exciting articles!
                  </p>

                  <div className="flex items-center justify-center gap-2 text-[#29ABE2]">
                    <Clock className="w-5 h-5 animate-pulse" />
                    <span>Stay tuned for updates</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <TrendingUp className="w-12 h-12 text-[#29ABE2] mx-auto mb-4" />
            <h2 className="text-white mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our channel for the latest videos, articles, and
              industry insights
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#29ABE2] transition-colors"
              />
              <button className="px-6 py-3 bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white rounded-lg hover:shadow-[0_8px_30px_rgba(41,171,226,0.4)] transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Join 10,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Share Menu Modal */}
      {showShareMenu && shareMenuVideo !== null && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setShowShareMenu(false)}
          />

          {/* Share Menu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl mx-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-xl">Share Video</h3>
                <button
                  onClick={() => setShowShareMenu(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Info */}
              <div className="mb-6 p-3 bg-gray-800/50 rounded-lg">
                <p className="text-gray-300 text-sm line-clamp-2">
                  {videos[shareMenuVideo].title}
                </p>
              </div>

              {/* Share Options Grid */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                {/* Facebook */}
                <button
                  onClick={() => shareToFacebook(shareMenuVideo)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6 text-white" fill="white" />
                  </div>
                  <span className="text-gray-400 text-xs">Facebook</span>
                </button>

                {/* Twitter */}
                <button
                  onClick={() => shareToTwitter(shareMenuVideo)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-700">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-400 text-xs">Twitter</span>
                </button>

                {/* LinkedIn */}
                <button
                  onClick={() => shareToLinkedIn(shareMenuVideo)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" fill="white" />
                  </div>
                  <span className="text-gray-400 text-xs">LinkedIn</span>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() => shareToWhatsApp(shareMenuVideo)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle
                      className="w-6 h-6 text-white"
                      fill="white"
                    />
                  </div>
                  <span className="text-gray-400 text-xs">WhatsApp</span>
                </button>

                {/* Telegram */}
                <button
                  onClick={() => shareToTelegram(shareMenuVideo)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#26A5E4] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-400 text-xs">Telegram</span>
                </button>

                {/* Instagram */}
                <button
                  onClick={() => shareToInstagram(shareMenuVideo)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-400 text-xs">Instagram</span>
                </button>

                {/* TikTok */}
                <button
                  onClick={() => shareToTikTok(shareMenuVideo)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-[#00F2EA]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-xs">TikTok</span>
                </button>

                {/* Email */}
                <button
                  onClick={() => shareToEmail(shareMenuVideo)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-400 text-xs">Email</span>
                </button>
              </div>

              {/* Copy Link Button */}
              <button
                onClick={() => copyToClipboard(shareMenuVideo)}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors"
              >
                <Link2 className="w-5 h-5" />
                <span>Copy Link</span>
              </button>
            </div>
          </motion.div>
        </>
      )}

      {/* Share Toast Notification */}
      {showShareToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-gray-900 border border-gray-700 rounded-lg px-6 py-3 shadow-2xl flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-white">Link copied to clipboard!</p>
          </div>
        </motion.div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f1f1f;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4a4a4a;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #5a5a5a;
        }
      `}</style>
    </div>
  );
}
