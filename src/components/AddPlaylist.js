import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Nếu có hình ảnh mặc định
import NavBar from './NavBar';

const AddPlaylist = () => {
    // State để lưu ảnh được upload
    const [playlistImage, setPlaylistImage] = useState(assets.playlist_icon || "default_icon_url");

    // State để lưu tên playlist và trạng thái chỉnh sửa
    const [playlistName, setPlaylistName] = useState("My Playlist ");
    const [isEditing, setIsEditing] = useState(false);

    // Hàm xử lý khi người dùng chọn ảnh
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Tạo URL từ tệp được chọn
            setPlaylistImage(imageUrl); // Cập nhật ảnh trong state
        }
    };

    // Hàm xử lý khi người dùng nhấn Enter hoặc blur để kết thúc chỉnh sửa
    const handleNameChange = (event) => {
        if (event.key === 'Enter' || event.type === 'blur') {
            setIsEditing(false); // Kết thúc chỉnh sửa
        }
    };

    return (
        <>
            <NavBar />
            <div className="bg-[#121212] text-white min-h-screen p-8">
                {/* Phần tiêu đề của playlist */}
                <div className="flex items-center gap-6">
                    {/* Hình đại diện playlist */}
                    <div className="w-48 h-48 bg-[#242424] flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden">
                        {/* Ảnh playlist */}
                        <img
                            src={playlistImage}
                            alt="Playlist"
                            className="absolute inset-0 w-full h-full object-cover" // Đây là dòng quan trọng để ảnh phủ kín
                        />
                        {/* Input file để tải ảnh lên */}
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleImageUpload} // Khi chọn file, gọi hàm handleImageUpload
                        />
                    </div>

                    {/* Thông tin playlist */}
                    <div>
                        <p className="text-sm uppercase text-gray-400">Playlist</p>
                        {isEditing ? (
                            <input
                                type="text"
                                value={playlistName}
                                onChange={(e) => setPlaylistName(e.target.value)} // Cập nhật tên playlist
                                onKeyDown={handleNameChange} // Nhấn Enter để hoàn tất chỉnh sửa
                                onBlur={handleNameChange} // Rời khỏi ô nhập cũng hoàn tất chỉnh sửa
                                autoFocus
                                className="text-6xl font-bold bg-transparent outline-none border-none text-white"
                            />
                        ) : (
                            <h1
                                className="text-6xl font-bold cursor-pointer"
                                onClick={() => setIsEditing(true)} // Nhấn vào để chỉnh sửa tên
                            >
                                {playlistName}
                            </h1>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                            <img
                                src={assets.user_icon || "default_user_icon_url"}
                                alt="User"
                                className="w-6 h-6 rounded-full"
                            />
                            <p className="text-sm text-gray-400">CloneK •</p>
                        </div>
                    </div>
                </div>

                {/* Thanh công cụ nhỏ bên dưới */}
                <div className="mt-6 flex justify-between items-center border-b border-gray-700 pb-4">
                    <div className="flex gap-2 items-center">
                        {/* Nút ba chấm */}
                        <div className="w-8 h-8 bg-[#242424]rounded-full flex items-center justify-center cursor-pointer">
                            <span className="text-xl text-gray-400">•••</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-sm text-gray-400">List</p>
                    </div>
                </div>

                {/* Phần tìm kiếm */}
                <div className="mt-6">
                    <p className="text-xl font-bold mb-2">Let's find something for your playlist</p>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for songs or episodes"
                            className="w-full p-4 pl-10 bg-[#242424] text-gray-300 rounded-full focus:outline-none"
                        />
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                            <i className="material-icons">close</i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );

};

export default AddPlaylist;
