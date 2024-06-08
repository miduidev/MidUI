export function Avatar() {
  return (
    <div className="flex items-center space-x-3">
      {/* Small  */}
      <img
        className="cursor-pointer object-cover size-8 rounded-full"
        src="https://cataas.com/cat?width=300&height=300"
        alt="profile"
      />

      {/* Medium  */}
      <img
        className="cursor-pointer object-cover size-12 rounded-full"
        src="https://cataas.com/cat?width=300&height=300"
        alt="profile"
      />

      {/* Large  */}
      <img
        className="cursor-pointer object-cover size-16 rounded-full"
        src="https://cataas.com/cat?width=300&height=300"
        alt="profile"
      />
    </div>
  );
}
